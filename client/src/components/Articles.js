import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import languages from './languages';
import topics from '../topics';

import GenericSelect from './GenericSelect';

export default class Articles extends Component {
  state = {
    topic: '',
    language: '',
    pureArticleList: [],
    filteredArticleList: [],
  };

  componentDidMount = () => {
    this.getAllArticles();
  }

  getAllArticles = () => {
    axios.get('/api/article')
      .then((res) => {
        console.log('pureArticleList', res.data)
        this.setState({
          pureArticleList: res.data,
          filteredArticleList: res.data,
        });
      });
  }

  filterByLanguageAndTopic = (language, topic) => {
    const pureArticlesCopy = [...this.state.pureArticleList];

    if (language !== 'all' ) {
      const filteredArticleList = pureArticlesCopy.filter((article) => {
      return article.language === language && article.topic === topic;
    });
    this.setState({ filteredArticleList });
  }
    if (language === 'all') {
      const filteredArticleList = pureArticlesCopy.filter((article) => {
        return article.topic === topic;
      });
      this.setState({ filteredArticleList });
    }

    if (topics === 'all') {
      const filteredArticleList = pureArticlesCopy.filter((article) => {
        return article.language === language;
      });
      this.setState({ filteredArticleList });
    }
  }

  onLanguageChange = (event) => {
    const newLanguage = event.target.value;
    const { topic } = this.state;

    this.filterByLanguageAndTopic(newLanguage, topic);
  }

  onTopicChange = (event) => {
    const newTopic = event.target.value;
    // const { language } = this.state; these mean the same thing
    const language = this.state.language;

    this.filterByLanguageAndTopic(language, newTopic);
  }

  render() {
    console.log('topics', topics);
    const filteredArticleList = this.state.filteredArticleList.map((article) => {
      return (
        <div key={article._id}>
          <Link to={`/article/${article._id}`}><h2>{article.name}</h2></Link>
        </div>
      )
    })
    return (
      <div>
        <h1 className="mainHeading">DevDisquisitions</h1>
        <GenericSelect
          changeAction={this.onLanguageChange}
          data={languages}
        />
        <GenericSelect
          changeAction={this.onTopicChange}
          data={topics}
        />
        <div>
          <Link to={`/createNew`}><button>CreateNew</button></Link>
        </div>
        {filteredArticleList}
        {console.log('filteredArticleList', filteredArticleList)}

      </div>
    )
  }
}
