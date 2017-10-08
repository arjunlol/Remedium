import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login'
import Register from './Register'
import Home from './Home'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import Write from './Write';
import Feedback from './Feedback';
import Dashboard from './Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route exact path='/'component={Home} />
            <Route path='/login' component={Login}/>
            <Route path='/Register' component={Register}/>
            <Route path='/Write' component={Write}/>
            <Route path='/Feedback' component={Feedback}/>
            <Route path='/Dashboard' component={Dashboard}/>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
