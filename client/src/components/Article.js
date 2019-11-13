import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default class Article extends Component {
    state = {
        article: {},
        doIRedirect: false
    }
    componentDidMount = () => {
        axios.get(`/api/article/${this.props.match.params.articleId}`)
            .then((res) => {
                this.setState({ article: res.data })
            })
    }
    articleDeleteClick = (articleId) => {
        axios.delete(`/api/article/${this.props.match.params.articleId}`)
            .then((res) => {
                this.setState({ doIRedirect: true })
            })
    }
    render() {
        if (this.state.doIRedirect) {
            return (
                <Redirect to={`/`} />
            )
        }
        return (
            <div>
                <h1 className="main-create-box">{this.state.article.name}</h1>
                <div className="create-new-form-div">
                    <h2 className="form-p"> Language: {this.state.article.language}</h2>
                    <h2 className="form-p">Topic: {this.state.article.topic}</h2>
                    <div className="description-in-single-article">
                    <p>{this.state.article.description}</p>
                    </div>
                    <p className="links-to-article-on-single-page">{this.state.article.link}</p>
                    <button onClick={this.articleDeleteClick} className="createDisplaySelection">Delete</button>
                    <br /><br />
                    <Link to={`/`}><button className="createDisplaySelection">BackHome</button></Link>
                </div>
            </div>

        )
    }
}
