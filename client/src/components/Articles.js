import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Articles extends Component {
    state = {
        topic: '',
        articleList: []
    }
    componentDidMount = () => {
        this.getAllArticles()
    }

    getAllArticles = () => {
        axios.get('/api/article')
            .then((res) => {
                console.log('articleList', res.data)
                this.setState({ articleList: res.data })
            })
    }
    generateLanguageList = function (data) {
        return <option>(data)</option>
    }
    onLanguageChange = (event) => {
        const newLanguage = event.target.value
        console.log('newLanguage', newLanguage)

        axios.get('/api/article')
            .then((res) => {
                const allArticles = res.data
                if (newLanguage === 'all') {
                    this.setState({ articleList: allArticles })
                } else {
                    const filteredList = allArticles.filter((article) => {
                        return article.language === newLanguage
                    })
                    this.setState({ articleList: filteredList })
                }
            })
    }
    onTopicChange = (event) => {
        const newTopic = event.target.value
        console.log('newTopic', newTopic)

        axios.get('api/article')
            .then((res) => {
                const allArticles = res.data
                if (newTopic === 'all') {
                    this.setState({ articleList: allArticles })
                } else {
                    const filteredTopicList = allArticles.filter((article) => {
                        return article.topic === newTopic
                    })
                    this.setState({ articleList: filteredTopicList })
                }
            })
    }
    render() {
        const allArticles = this.state.articleList.map((article) => {
            return (
                <div>
                    <Link to={`/article/${article._id}`}><h2>{article.name}</h2></Link>
                </div>
            )
        })
        return (
            <div>
                <h1 class="mainHeading">DevDisquisitions</h1>
                <select className="displaySelection" onChange={this.onLanguageChange}>
                        <option value="all">All</option>
                        <option value="JAVA">JAVA</option>
                        <option value="javascript">Javascript</option>
                        <option value="Python">Python</option>
                        <option value="C/CPP">C/CPP</option>
                        <option value="PHP">PHP</option>
                        <option value="C#">C#</option>
                        <option value="Ruby">Ruby</option>
                </select>
                <select className="displaySelection" onChange={this.onTopicChange}>
                    <option value="all">All</option>
                    <option value="Basics">Basics</option>
                    <option value="Loops">Loops</option>
                    <option value="Classes/Objects">Classes/Objects</option>
                    <option value="Arrays">Arrays</option>
                    <option value="Functions">Functions</option>
                </select>
                <div>
                    <Link to={`/createNew`}><button>CreateNew</button></Link>
                </div>
                {allArticles}
            </div>
        )
    }
}
