import React, { Component } from 'react'
import axios from 'axios'


export default class CreateNew extends Component {
    state = {
        newArticle: {
            name: '', 
            link: '',  
            language: '', 
            topic: '', 
            picture: ''
        }
    }
    handleNewArticleChange = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;

        const newArticle = { ...this.state.newArticle };
        newArticle[attributeName] = attributeValue;

        this.setState({ newArticle })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/article', this.state.newArticle)
    }
    render() {
        return (
            <div>
                <h1>Create A New Article</h1>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input
                                name="name"
                                type="text"
                                placeholder="Name"
                                value={this.state.newArticle.name}
                                onChange={this.handleNewArticleChange}
                            />
                        </div>
                        <div>
                            <input
                                name="link"
                                type="url"
                                placeholder="article URL"
                                value={this.state.newArticle.link}
                                onChange={this.handleNewArticleChange}
                            />
                        </div>
                        <div>
                            <select name="language" value={this.state.newArticle.link} onChange={this.handleNewArticleChange}>
                                <option value="Javascript">Javascript</option>
                                <option value="CSS">CSS</option>
                                <option value="HTML">HTML</option>
                            </select>
                        </div>
                        <div>
                            <input
                                name="topic"
                                type="text"
                                placeholder="topic name"
                                value={this.state.newArticle.topic}
                                onChange={this.handleNewArticleChange}
                            />
                        </div>
                        <div>
                            <input
                                name="picture"
                                type="text"
                                placeholder="image URL"
                                value={this.state.newArticle.picture}
                                onChange={this.handleNewArticleChange}
                            />
                        </div>
                        <div>
                            <input
                                type="submit"
                                value="Create New Article"
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
