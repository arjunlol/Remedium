import React, { Component } from 'react';
//import Particles from 'react-particles-js';
import ParticleWrapper from './ParticleWrapper';
import Nav from './Nav';

class Home extends Component {
  render() {
    return (
    	<div>
			<div className="wrapper">
				<ParticleWrapper />
				<span className="BannerText">MyndJournal</span>
			</div>
			<br />
			<div className="has-text-centered">
				<span className="HomeText">Begin Your Journey to Better Mental Health.</span>
			</div>			
		</div>
    );
  }
}

export default Home;
