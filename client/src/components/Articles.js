import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import languages from './languages';
import topics from '../topics';

import GenericSelect from './GenericSelect';

export default class Articles extends Component {
  state = {
    topic: 'all',
    language: 'all',
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
    const { pureArticleList } = this.state;
    let filteredArticleList = [];

    if (language == 'all' && topic == 'all') {
      console.log('all');
      this.setState({ filteredArticleList: pureArticleList });
      return;
    }

    if (language == 'all') {
      console.log('language');
      filteredArticleList = pureArticleList.filter((article) => {
        return article.topic === topic;
      });
      this.setState({ filteredArticleList });
      return;
    }

    if (topic == 'all') {
      console.log('topic');
      filteredArticleList = pureArticleList.filter((article) => {
        return article.language === language;
      });
      this.setState({ filteredArticleList });
      return;
    }

    console.log('everything else');
    filteredArticleList = pureArticleList.filter(article => article.language == language && article.topic == topic);
    console.log('list', filteredArticleList);

    this.setState({ filteredArticleList });

  }

  onLanguageChange = (event) => {
    const language = event.target.value;
    this.setState({ language });
    const { topic } = this.state;

    this.filterByLanguageAndTopic(language, topic);
  }

  onTopicChange = (event) => {
    const topic = event.target.value;
    this.setState({ topic: topic });
    // const { language } = this.state; these mean the same thing
    const language = this.state.language;

    this.filterByLanguageAndTopic(language, topic);
  }

  render() {
    const filteredArticleList = this.state.filteredArticleList.map((article) => {
      const style = {
        backgroundColor: 'yellow'
      }
      return (
        <div className="individual-article-in-the-list" key={article._id} style={style}>
          <Link to={`/article/${article._id}`}><h2>{article.name}</h2></Link>
        </div>
      )
    })
    return (
      <div>
        <div className="main-box">
          <p className="welcome-line">Welcome to...</p>
          <h1>DevDisquisitions</h1>
          <p className="description-line-heading">A place for Developers to share learning resources relating to a variety of topics.</p>
        </div>
        <div className="articles-display">
          <div className="both-drop-down-menu">
            <GenericSelect
              changeAction={this.onLanguageChange}
              data={languages}
            />
            <GenericSelect
              changeAction={this.onTopicChange}
              data={topics}
            />
            <div>
              <Link to={`/createNew`}><button className="create-new-button"></button></Link>
            </div>
          </div>
          <div className="article-list-section">
            {filteredArticleList}
          </div>
        </div>
      </div>
    )
  }
}
