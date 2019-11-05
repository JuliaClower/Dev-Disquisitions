
const express = require('express')

const festivityApi = require('../models/festivity.js')

const festivityRouter = express.Router()

//getAll
festivityRouter.get('/', (req, res) => {
  festivityApi.getAllFestivity()
  .then((allFestivity) => {
    res.json(allFestivity)
  })
});
//getOne
festivityRouter.get('/:festivityId', (req, res) => {
  festivityApi.getOneFestivity()
  .then((oneFestivity) => {
    res.json(oneFestivity)
  })
});
//create
festivityRouter.post('/', (req, res) => {
  festivityApi.createFestivity(req.body)
  .then((newFestivity) => {
    res.json(newFestivity)
  })
});
//update 
festivityRouter.put('/:festivityId', (req, res) => {
  festivityApi.updateFestivity(req.params.creatureId, req.body)
  .then((updatedFestivity) => {
    res.json(updatedFestivity)
  })
})
//delete
festivityRouter.delete('/festivityId', (req, res) => {
  festivityApi.deleteFestivity(req.params.festivityId)
  .then((deletedFestivity) => {
    res.json('deleted')
  })
})
module.exports = {
  festivityRouter
}
