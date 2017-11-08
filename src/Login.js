import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Nav from './Nav';


class Login extends Component {
  render() {
    return (
      <div>
        <Nav />
        <section className="section">
            <div className="container">
              <h1 className="title">
                Login to begin your journey to better mental health.
              </h1>
              <p className="subtitle">
                Not signed up? Sign up <NavLink activeClassName='active' to="/register">here.</NavLink>
              </p>
            </div>
        </section>


        <div className="columns is-mobile is-centered">
          <div className="column is-one-quarter is-narrow">
            <form method="post" action="/loggingIn">
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input className="input" type="email" placeholder="Email" name="email" required />
                  <span className="icon is-small is-left">
                    <i className="fa fa-envelope"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input className="input" type="password" placeholder="Password" name="password" required />
                  <span className="icon is-small is-left">
                    <i className="fa fa-lock"></i>
                  </span>
                </p>
              </div>
              <div className="field is-grouped is-grouped-right">
                <p className="control">
                  <input className="button is-primary" type="submit" />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
