import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>MyndJournal</strong>
          </p>
          <p>
            <a class="icon" href="https://github.com/jgthms/bulma">
              <i class="fa fa-github"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
    );
  }
}

export default Footer;
