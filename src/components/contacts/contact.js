import React, { Component } from 'react';
import { render } from 'react-dom';
import './contact.css';



class Contact extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
        </div>

        <h1 class="animated bounce">
          <div class="speech-bubble">
            Hope <br />You liked What you saw
        </div>
        </h1>
        <div class="animated bounce">
          <div class="containerContact">
            <h1>Contact Me </h1>
            <div>
              <p>
                Full Name : Kaushik Raina<br/>
                
                Mail ID: <a href="mailto:kaushikraina555@gmail.com?Subject=Offcampus%20Job" target="_top">kaushikraina555@gmail.com</a>  <br />
                Residence: New Delhi <br/>

        </p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Contact;
