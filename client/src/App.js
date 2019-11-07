import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Articles from './components/Articles.js'
import Article from './components/Article.js'
import NavBar from './components/NavBar.js'
import './App.css';



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Articles}/>
          <Route path="/articles/:articleId" component={Article}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
