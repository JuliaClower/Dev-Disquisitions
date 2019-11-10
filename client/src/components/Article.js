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
                this.setState({doIRedirect : true })
            })
    }
    render() {
        if (this.state.doIRedirect) {
            return (
                <Redirect to={`/`} />
            )}
        return (
            <div>
                <h1>{this.state.article.name}</h1>
                <h2>Language: {this.state.article.language}</h2>
                <h3>Topic: {this.state.article.topic}</h3>
                <p>{this.state.article.description}</p>
                <button onClick={this.articleDeleteClick}>Delete</button>
                <Link to={`/`}><button>BackHome</button></Link>
            </div>

        )
    }
}
