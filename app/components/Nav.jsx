import React, { Component } from 'react';

import { NavLink,IndexLink,IndexRoute } from 'react-router-dom';


export default class Nav extends Component {
  render() {
    return (
      <div>
        <h2>Nav Component</h2>
        <NavLink to="/About" activeClassName="active">About</NavLink>
        <NavLink exact to="/Weather" activeClassName="active">Weather</NavLink>
      </div>
    ); 
  }
}

//export default Nav;

