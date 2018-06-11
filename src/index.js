import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './app.js';


import'./index.css'

class Index extends Component {
  constructor() {
    super();
  }

 
 

  render() {
    return (
     <div className ="background">   
        <App />
      </div>
    );
  }
}

render(<Index />, document.getElementById('root'));
