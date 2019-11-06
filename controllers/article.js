
const express = require('express')

const articleApi = require('../models/article.js')

const articleRouter = express.Router()

//getAll
articleRouter.get('/', (req, res) => {
  articleApi.getAllArticle()
    .then((allArticle) => {
      // res.send('Hello')
      res.json(allArticle)
    })
});
//getOne
articleRouter.get('/:articleId', (req, res) => {
  articleApi.getOneArticle(req.params.articleId)
    .then((oneArticle) => {
      res.json(oneArticle)
    })
});
//create
articleRouter.post('/', (req, res) => {
  articleApi.createArticle(req.body)
    .then((newArticle) => {
      res.json(newArticle)
    })
});
//update 
articleRouter.put('/:articleId', (req, res) => {
  articleApi.updateArticle(req.params.articleId, req.body)
    .then((updatedArticle) => {
      res.json(updatedArticle)
    })
})
//delete
articleRouter.delete('/:articleId', (req, res) => {
  articleApi.deleteArticle(req.params.articleId)
    .then((deletedArticle) => {
      res.json('deleted')
    })
})
module.exports = {
  articleRouter
}
