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


    // const pureArticlesCopy = [...this.state.pureArticleList];
    // let filteredArticleList = pureArticlesCopy;

    // if (language !== 'all') {
    //   console.log('not all');

    //   filteredArticleList = pureArticlesCopy.filter((article) => {
    //     return article.language === language && article.topic === topic;
    //   });
    //   this.setState({ filteredArticleList });
    // }

    // if (language === 'all') {
    //   console.log('language all');
    //   filteredArticleList = pureArticlesCopy.filter((article) => {
    //     return article.topic === topic;
    //   });
    //   this.setState({ filteredArticleList });
    // }

    // if (topics === 'all') {
    //   console.log('topics all');
    //   filteredArticleList = pureArticlesCopy.filter((article) => {
    //     return article.language === language;
    //   });
    //   this.setState({ filteredArticleList });
    // }
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
      </div>
    )
  }
}
