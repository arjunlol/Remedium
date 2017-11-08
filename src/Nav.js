import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div>
        <nav class="navbar is-transparent">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
            </a>
            <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
              <NavLink exact activeClassName='active' to='/' className="navbar-item">
                Home
              </NavLink>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="field is-grouped">
                  <p class="control">
                    <NavLink activeClassName='active' to='/write' className="navbar-item">
                      Write
                    </NavLink>
                  </p>
                  <p class="control">
                    <NavLink activeClassName='active' to='/feedback' className="navbar-item">
                      Feedback
                    </NavLink>
                  </p>
                  <p class="control">
                    <NavLink activeClassName='active' to='/dashboard' className="navbar-item">
                      Dashboard
                    </NavLink>
                  </p>
                  <p class="control">
                    <NavLink activeClassName='active' to='/login' className="bd-tw-button button">
                      Login
                    </NavLink>
                  </p>
                  <p class="control">
                    <NavLink activeClassName='active' to='/register' className="bd-tw-button button">
                      Register
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      );
  }
}

export default Nav;