import React, { Component } from 'react';
import { render } from 'react-dom';
import './socialbar.css';


class Socialbar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div >
        <div class="row">

          <div class="block">
            <a href="https://www.linkedin.com/in/kaushik-raina-7a2203109/">
              <img alt="LinkedIn" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png" width="40%" height="50%" />
            </a>
          </div>

          <div class="block">
            <a href="https://github.com/kaushikraina">
              <img alt="Github" src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png" width="40%" height="50%"/>
            </a>
          </div>

          <div class="block">
            <a href="https://www.quora.com/profile/Kaushik-Raina">
              <img alt="Quora" src="https://cdn2.iconfinder.com/data/icons/Quora-Icons/512/Quora.png" width="40%" height="50%" />
            </a>
          </div>

        </div>
      </div>
    );
  }
}

export default Socialbar;
