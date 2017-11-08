import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Nav from './Nav';

class Register extends Component {
  render() {
    return (
	    <div>
	    	<Nav />
			<section className="section">
				<div className="container">
					<h1 className="title">
					  Sign up to begin your journey to better mental health.
					</h1>
					<p className="subtitle">
					  Already a member? Login <NavLink activeClassName='active' to="/login">here.</NavLink>
					</p>
				</div>
			</section>


			<div className="columns is-mobile is-centered">
				<div className="column is-one-quarter is-narrow">
					<form>
						<div className="field">
						  <p className="control has-icons-left has-icons-right">
						    <input className="input" type="text" placeholder="First Name" required />
						    <span className="icon is-small is-left">
						      <i className="fa fa-user"></i>
						    </span>
						  </p>
						</div>
						<div className="field">
						  <p className="control has-icons-left has-icons-right">
						    <input className="input" type="text" placeholder="Last Name" required />
						    <span className="icon is-small is-left">
						      <i className="fa fa-user"></i>
						    </span>
						  </p>
						</div>
						<div className="field">
						  <p className="control has-icons-left has-icons-right">
						    <input className="input" type="text" placeholder="How old are you?" required />
						    <span className="icon is-small is-left">
						      <i className="fa fa-birthday-cake"></i>
						    </span>
						  </p>
						</div>
						<div className="field">
						  <p className="control has-icons-left has-icons-right">
						    <input className="input" type="text" placeholder="The university you're attending..." required />
						    <span className="icon is-small is-left">
						      <i className="fa fa-graduation-cap"></i>
						    </span>
						  </p>
						</div>
						<div className="field">
						  <p className="control has-icons-left has-icons-right">
						    <input className="input" type="text" placeholder="Your Major" required />
						    <span className="icon is-small is-left">
						      <i className="fa fa-briefcase"></i>
						    </span>
						  </p>
						</div>
						<div className="field">
						  <p className="control has-icons-left has-icons-right">
						    <input className="input" type="email" placeholder="Your university email id..." required />
						    <span className="icon is-small is-left">
						      <i className="fa fa-envelope"></i>
						    </span>
						  </p>
						</div>
						<div className="field">
						  <p className="control has-icons-left has-icons-right">
						    <input className="input" type="password" placeholder="Password" required />
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

export default Register;
