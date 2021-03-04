const express = require('express')
const router = express.Router()

// Getting all parkinglots
router.get('/', async (req, res) => {
    res.send('Hello Kunal Used For Testing')
  })
  
  // Getting One parkinglots
  router.get('/:id', (req, res) => {
    
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