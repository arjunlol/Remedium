import React, { Component } from 'react';
import Nav from './Nav';



// For the specific paragraph response, we need to figure out a format for the response. 
// A general outline similar to fill in the blanks where the blanks will be filled by user specific info. My attempt:
// *********************************************************************
// You sound like you're having a ____ (type of day) day. I can tell because of _____ (text specific info like number of things mentioned (natural language understanding)).
// _____ (positive, uplifting response continuing from the reason give up top). _____ (Quick fact, based on time/day and its relation to mental health and relation to specfic person (based on what the person has written)).
// Take a second out of your day and have a look at the following resources. They should help. 


class Feedback extends Component {
  constructor (props) {
    super(props);

    this.state = {
      name: 'Poo',
      typeOfDay: 'busy'
    }
  }


  render() {
    const name = this.state.name;
    const typeOfDay = this.state.typeOfDay;
    return (
      <div>
        <Nav />
        <section className="section">
          <div className="container">
            <h2 className="title">
              Great work today {name}!
            </h2>
            <p className="subtitle">
              Seems like you're having a {typeOfDay} day.
            </p>
          </div>
        </section>
        <br />
        <section className="section">
          <div className="container">
            <p className="subtitle">
              You sound like you're having a {typeOfDay} (type of day) day. I can tell because of _____ (text specific info like number of things mentioned (natural language understanding)).
              _____ (positive, uplifting response continuing from the reason give up top). _____ (Quick fact, based on time/day and its relation to mental health and relation to specfic person (based on what the person has written)).
              Take a second out of your day and have a look at the following resources. They should help. 
            </p>
          </div>
        </section>

      </div>
    );
  }
}

export default Feedback;
