import React, { Component } from 'react';
import Nav from './Nav';

class Write extends Component {
  render() {
    return (
      <div>
        <Nav />
        <section class="section">
          <div class="container">
            <h1 class="title">
              Hi, Poo
            </h1>
            <p class="subtitle">
              Tell <strong>your</strong> story...
            </p>
          </div>
        </section>

        <div class="columns">
          <div class="column is-two-thirds is-offset-2">
            <form method="post" action="/api/analyze" id="writeForm">
              <div class="field">
                <label class="title is-4">Story</label>
                <div class="control">
                  <textarea class="textarea" name="text" id="Story" rows="7" placeholder="Write your thoughts and feelings to understand them more clearly. You are free to write about whatever you like!"></textarea>
                </div>
              </div>
              <div class="field is-grouped is-grouped-right">
                <p class="control">
                  <input class="button is-primary" type="submit"/>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Write;