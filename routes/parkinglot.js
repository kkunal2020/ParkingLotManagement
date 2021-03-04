const express = require('express')
const router = express.Router()
const ParkingLotManagement = require('../models/parkinglot')

// Getting all parkinglots
router.get('/', async (req, res) => {
    //res.send('Hello Kunal Used For Testing')
    try {
      const parkinglot = await ParkingLotManagement.find()
      res.json(parkinglot)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
  })
  
  // Getting One parkinglots
  router.get('/:id', (req, res) => {
    res.send(req.params.id)
  })
  
  // Creating one parkinglots
  router.post('/', async (req, res) => {
    
  })
  
  // Updating One parkinglots
  router.patch('/:id', async (req, res) => {
    
  })
  
  // Deleting One parkinglots
  router.delete('/:id', async (req, res) => {
   
  })

module.exports = router