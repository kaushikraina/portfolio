import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

import './achievements.css'


class Achievements extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>

        <div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
        </div>

        <h1 class="animated fadeInDown">Achievements</h1>


        <ListGroup>

          <ListGroupItem >

            <div class=" animated slideInLeft">
              <ListGroupItemHeading class="animated fadeInDown">
              <p className="Heading">
                Got selected for internship out of 80 teams in AICTE
              </p>
              </ListGroupItemHeading>
            </div>

            <div class=" animated slideInRight">
              <ListGroupItemText>
              <p className="Content">
                Our project work was praised during <a href="https://www.quora.com/What-is-smart-India-hackathon">SMART INDIA HACKATHON 2017 </a> and we were offered internship by AICTE.Our team was only one which was selected for internship out of 82 teams.
              </p>
          </ListGroupItemText>
            </div>
          </ListGroupItem>

          <ListGroupItem >
            <div class=" animated slideInLeft">            
              <ListGroupItemHeading class="animated fadeInDown">
               <p className="Heading">
                Secured 1 rank out of 20 praticipants in Appathon contest in college.
              </p>
              </ListGroupItemHeading>
            </div>

            <div class=" animated slideInRight">
              <ListGroupItemText>
                <p className="Content">
                  This contest was organised by our college . Judges in contest were mentors from Coding Blocks Institute In delhi.
                </p>
              </ListGroupItemText>
            </div>
          </ListGroupItem>

          <ListGroupItem >
            <div class=" animated slideInLeft">            
              <ListGroupItemHeading class="animated fadeInDown">
               <p className="Heading">
                Selected in top 20 in World Food India Hackathon 2017
              </p>
              </ListGroupItemHeading>
            </div>

            <div class=" animated slideInRight">
              <ListGroupItemText>
                <p className="Content">
                  Our team was selected in top 20 teams out of 130 teams which participated in <a href="https://secure.mygov.in/task/world-food-india-hackathon-2017/"> World Food India Hackathon 2017 </a>.
                </p>
              </ListGroupItemText>
            </div>
          </ListGroupItem>

          <ListGroupItem >
            <div class=" animated slideInLeft">            
              <ListGroupItemHeading class="animated fadeInDown">
               <p className="Heading">
               Recieved Cash Prize from college.
              </p>
              </ListGroupItemHeading>
            </div>

            <div class=" animated slideInRight">
              <ListGroupItemText>
                <p className="Content">
                  My team was awarded woth 10000rs cash price for getting selected in Top 60 out of 8000 teams in Smart India Hackathon 2017.
                </p>
              </ListGroupItemText>
            </div>
          </ListGroupItem>

        </ListGroup>


      </div>
    );
  }
}

export default Achievements;
