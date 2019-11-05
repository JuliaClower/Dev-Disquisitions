const mongoose = require('./connection.js')
const FestivitySchema = new mongoose.Schema({
  eventName: String, 
  date: Date,
  openInvite: Boolean, 
  hostName: String
})

const FestivityCollection = mongoose.model('Festival', FestivitySchema)

//getAll
const getAllFestivity = () => {
  return FestivityCollection.find({})
};
//getOne
const getOneFestivity = (festiveId) => {
  return FestivityCollection.findById(festiveId)
};
//create
const createFestivity = (newFestivity) => {
return FestivityCollection.create(newFestivity)
};
//update
const updateFestivity = (festiveId, updatedFestivity) => {
return FestivityCollection.updateOne({_id: festiveId}, updatedFestivity)
};
//delete
const deleteFestivity = (festiveId) => {
  return FestivityCollection.deleteOne({id_: festiveId})
};

module.exports = {
  getAllFestivity,
  getOneFestivity,
  createFestivity,
  updateFestivity,
  deleteFestivity
}
