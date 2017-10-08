import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <ul>
        <li>
          <NavLink exact activeClassName='active' to='/' className="button is-medium is-primary">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/login' className="button is-medium is-primary">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/register' className="button is-medium is-primary">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/write' className="button is-medium is-primary">
            Write
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/feedback' className="button is-medium is-primary">
            Feedback
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/dashboard' className="button is-medium is-primary">
            Dashboard
          </NavLink>
        </li>
      </ul>
      );
  }
}

export default Nav;