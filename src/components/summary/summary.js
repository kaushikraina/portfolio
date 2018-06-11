import React, { Component } from 'react';
import { render } from 'react-dom';
import './summary.css';


class Summary extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div> 
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
        </div >
        <div >
          <div class="speech-bubble">
            <h1 class="animated jello">
            Hello! I'm Kaushik
            </h1>
          </div>
        </div>

        <div class="animated fadeInUp">
          <div class="containerSum">
            ★I have interned as android developer intern at AICTE and our app is used by more than 1000 users on Playstore<br /><br />
            ★I have won prizes in numerous hackathon events.<br /><br />

            ★I'm regular in competitive coding and have solved more than 200 questions on codechef,leetcode,interview bit<br /><br />

            ★ Currently, I am playing with Object Oriented Designing and Design Patterns in JAVA<br/><br />

            ★ I have good knowledge of c,c++,java,android Application Devopement Reactjs<br /><br />

            ★ I have also worked on BlockChain,Nodejs,expressjs,Ionic Framework<br /><br />
            ★ And have worked continously on Git and GitHub<br /><br />

            ★And best of all, I know how to use StackOverflow and Google ;) <br /><br />

            ★ Please do checkout one of my work :  https://goo.gl/mrZBMX<br />
           

          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
