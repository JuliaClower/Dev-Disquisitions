import React, { Component } from 'react'
import axios from 'axios'


export default class CreateNew extends Component {
    state = {
        newArticle: {
            name: '',
            link: '',
            language: '',
            topic: '',
            description: ''
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
                            <select name="language" value={this.state.newArticle.language} onChange={this.handleNewArticleChange}>
                                    <option value="all">All</option>
                                    <option value="java">JAVA</option>
                                    <option value="javascript">Javascript</option>
                                    <option value="python">Python</option>
                                    <option value="ccpp">C/CPP</option>
                                    <option value="php">PHP</option>
                                    <option value="c#">C#</option>
                                    <option value="ruby">Ruby</option>
                            </select>
                        </div>
                        <div>
                            <select name="topic" value={this.state.newArticle.topic} onChange={this.handleNewArticleChange}>
                                <option value="basics">Basics</option>
                                <option value="loops">Loops</option>
                                <option value="classesobjects">Classes/Objects</option>
                                <option value="arrays">Arrays</option>
                                <option value="functions">Functions</option>
                            </select>
                        </div>
                        <div>
                            <input
                                name="description"
                                type="text"
                                placeholder="Describe why this was helpful"
                                value={this.state.newArticle.description}
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
