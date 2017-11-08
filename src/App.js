import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import Write from './Write';
import Feedback from './Feedback';
import Dashboard from './Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/'component={Home} />
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/write' component={Write}/>
            <Route path='/feedback' component={Feedback}/>
            <Route path='/dashboard' component={Dashboard}/>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
