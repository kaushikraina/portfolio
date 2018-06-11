import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ReactFitText from 'react-fittext';
import Hello from './Hello';
import './app.css';
import Socialbar from './components/socialbar/socialbar.js'

import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, CardImgOverlay
} from 'reactstrap'; 

import StarRatingComponent from 'react-star-rating-component';




class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
       <div class="profilePic-app">
        <img width="20%" height="20%" src="https://avatars0.githubusercontent.com/u/21111639?s=400&u=a34bb65ab1d822126bf81fe5030078e8dcbf9872&v=4" />
     </div>

     <div class="socialbar">     
     <Socialbar/>
     </div>

        <div class = "containerApp">
          <Hello />
        </div>

      </div>
    );
  }
}

export default App;
