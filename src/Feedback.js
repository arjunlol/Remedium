import React, { Component } from 'react';
import Nav from './Nav';

class Feedback extends Component {
  render() {
    return (
      <div>
        <Nav />
        <section className="section">
          <div className="container">
            <h2 className="title">
              Great work today Poo!
            </h2>
            <p className="subtitle">
              Seems like you're having a busy day.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Feedback;
