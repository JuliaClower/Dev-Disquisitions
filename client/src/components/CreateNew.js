import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



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
				<h1 className="main-create-box">Create A New Article</h1>
				<div className="create-new-form-div">
					<form onSubmit={this.handleSubmit}>
						<div>
							<p className="form-p">Name of Article:</p>
							<input
								name="name"
								type="text"
								placeholder="Name"
								value={this.state.newArticle.name}
								onChange={this.handleNewArticleChange}
							/>
						</div>
						<div>
							<p className="form-p">Article URL:</p>
							<input
								name="link"
								type="url"
								placeholder="article URL"
								value={this.state.newArticle.link}
								onChange={this.handleNewArticleChange}
							/>
						</div>
						<div>
							<p className="form-p">Select the Programming Language:</p>
							<select className="createDisplaySelection" name="language" value={this.state.newArticle.language} onChange={this.handleNewArticleChange}>
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
							<p className="form-p">Select the Programming Topic:</p>
							<select className="createDisplaySelection" name="topic" value={this.state.newArticle.topic} onChange={this.handleNewArticleChange}>
								<option value="basics">Basics</option>
								<option value="loops">Loops</option>
								<option value="classesobjects">Classes/Objects</option>
								<option value="arrays">Arrays</option>
								<option value="functions">Functions</option>
							</select>
						</div>
						<div>
							<p className="form-p">What was useful about this article?</p>
							<textarea className="description-box"
								rows="5"
								cols="60"
								name="description"
								type="text"
								placeholder="Describe why this was helpful"
								value={this.state.newArticle.description}
								onChange={this.handleNewArticleChange}
							/>
						</div>
						<div>
							<input className="createDisplaySelection"
								type="submit"
								value="Create New Article"
							/>
							<br /><br />
							<Link to={`/`}><button className="createDisplaySelection" >BackHome</button></Link>
						</div>
					</form>
				</div>
			</div>
		)
	}
}
