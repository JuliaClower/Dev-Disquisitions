const mongoose = require('./connection.js')
const ArticleSchema = new mongoose.Schema({
  name: String, 
  link: String,  
  language: String, 
  topic: String, 
  description: String
})

const ArticleCollection = mongoose.model('Article', ArticleSchema)

//getAll
const getAllArticle = () => {
  return ArticleCollection.find({})
};
//getOne
const getOneArticle = (articleId) => {
  return ArticleCollection.findById(articleId)
};
//create
const createArticle = (newArticle) => {
  return ArticleCollection.create(newArticle)
};
//update
const updateArticle = (articleId, updatedArticle) => {
  return ArticleCollection.updateOne({ _id: articleId }, updatedArticle)
};
//delete
const deleteArticle = (articleId) => {
  return ArticleCollection.deleteOne({ _id: articleId })
};

module.exports = {
  getAllArticle,
  getOneArticle,
  createArticle,
  updateArticle,
  deleteArticle
}
