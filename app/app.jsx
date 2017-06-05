//var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Weather from './components/Weather';
import About from './components/About';

import { BrowserRouter, Route, IndexRoute, HashRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={Main} />
      <Route exact path="/Weather" component={Weather} />
      <Route path="/About" component={About} />
    </div>
  </Router>,
  document.getElementById('app')
);

