import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Articles extends Component {
    state = {
        articleList: []
    }
    componentDidMount = () => {
        axios.get('/api/article')
        .then((res) => {
            this.setState({ articleList: res.data })
        })
    }
    render() {
        const allArticles = this.state.articleList.map((article) => {
            return (
                <div>
                    <Link to={`/articles/${article._id}`}><h2>{article.name}</h2></Link>
                </div>
            )
        })
        return (
            <div>
                <h1>ARTICLES</h1>
                <div>
                    <Link to={`/createNew`}><button>CreateNew</button></Link>
                </div>
                {allArticles}
            </div>
        )
    }
}
