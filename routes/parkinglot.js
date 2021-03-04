const express = require('express')
const router = express.Router()
const ParkingLotManagement = require('../models/parkinglot')

// Getting all parkinglots
router.get('/', async (req, res) => {
    try {
      const parkinglot = await ParkingLotManagement.find()
      res.json(parkinglot)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
  })
  
  // Getting one parkinglots
  router.get('/:id', getParkingLot , (req, res) => {
    res.send(res.parkinglot.carNumber)
  })
  
  // Creating one parkinglots
  router.post('/', async (req, res) => {
    const parkinglot = new ParkingLotManagement({
      carNumber: req.body.carNumber,
      slotNumber: req.body.slotNumber,
      parkinglot: req.body.parkinglot
    })
    try {
      const newParkingLot = await parkinglot.save()
      res.status(201).json(newParkingLot)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })
  
  // Deleting One parkinglots
  router.delete('/:id', getParkingLot, async (req, res) => {
    try {
      await res.parkinglot.remove()
      res.json({ message: 'Deleted ParkingLot' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })
  
  async function getParkingLot(req, res, next) {
    let parkinglot
    try {
      parkinglot = await ParkingLotManagement.findById((req.params.id))
      if (parkinglot == null) {
        return res.status(404).json({ message: 'Cannot find the ParkingLot Id' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
    res.parkinglot = parkinglot
    next()
  }


module.exports = router