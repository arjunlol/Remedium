import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <br />
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p>
                <strong>MyndJournal</strong>
              </p>
              <p>
                <a className="icon" href="https://github.com/jgthms/bulma">
                  <i className="fa fa-github"></i>
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
