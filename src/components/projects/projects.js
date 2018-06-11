import React, { Component } from 'react';
import { render } from 'react-dom';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import 'bootstrap/dist/css/bootstrap.css';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';


class Projects extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"

            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

          >
            <h3 className="vertical-timeline-element-title">
              Dashboard For AICTE
</h3>
            <h4 className="vertical-timeline-element-subtitle">
              <p>
                Android Studio, Php/MySQL
    </p>
            </h4>

            <p>
              <Card>

                <img width="60%" src="https://github.com/kaushikraina/AicteOfficial/blob/master/GIF_IMAGE.gif?raw=true" alt="Card image cap" />

                <CardBody>
                  <CardText>
                    <ul>

                      <li>
                        More Than 1000 downloads on PlayStore
          </li>
                      <li>
                        Worked on JSON communications,Firebase,Material Design and overall application optimization.
          </li>

                    </ul>
                  </CardText>
                  <CardLink href="https://github.com/kaushikraina/AicteOfficial">
                    GitHub
          </CardLink>
                  <CardLink href="https://play.google.com/store/apps/details?id=com.vscholars.stack2code.aicte_phaseone&hl=en">
                    PlayStore
          </CardLink>
                </CardBody>
              </Card>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014-2018"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

          >
            <h3 className="vertical-timeline-element-title">
              Drug Tracability Using BlockChain
</h3>
            <h4 className="vertical-timeline-element-subtitle">
              <p>
                ReactJS, NodeJS, ExpressJS, Android Studio
    </p>
            </h4>

            <p>
              <Card>
                <img width="100%" src="https://techcrunch.com/wp-content/uploads/2017/08/gettyimages-676434248.jpg?w=730&crop=1" alt="Card image cap" />
                <CardBody>
                  <CardText>
                    <ul>
                   
                      <li>
                         Worked on distributed System design, web sockets, hashing.
                      </li>
                      <li>
                        Build whole software from scratch
                      </li>
                      <li>
                        Software is still in development phase.
                      </li>

                    </ul>
                  </CardText>
                  <CardLink href="#">
                    Github
          </CardLink>
                  <CardLink href="#">

                  </CardLink>
                </CardBody>
              </Card>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014-2018"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

          >
            <h3 className="vertical-timeline-element-title">
              Krishi Bazaar App
</h3>
            <h4 className="vertical-timeline-element-subtitle">
              <p>
                ionic Framework,Typescript,Html,CSS
    </p>
            </h4>

            <p>
              <Card>
                <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                  <CardText>
                    <ul>

                      <li>
                        Learned to build a Cross platform application and working with typescript ,html, css .
          </li>
                      <li>
                        Developed whole application from scratch
          </li>

                    </ul>
                  </CardText>
                  <CardLink href="#">
                    GitHub
          </CardLink>
                  <CardLink href="#">

                  </CardLink>
                </CardBody>
              </Card>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014-2018"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

          >
            <h3 className="vertical-timeline-element-title">
              Job Mania
</h3>
            <h4 className="vertical-timeline-element-subtitle">
              <p>
                Android Studio, Php/MySQL, Aadhaar API
    </p>
            </h4>

            <p>
              <Card>
                <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                  <CardText>
                    <ul>

                      <li>
                        Both students and employers could be verifed before applying for internships or jobs,
hence reduced the tedious work of verifcation.

          </li>
                      <li>
                        Worked With JSON and Aadhaar API

          </li>

                    </ul>
                  </CardText>
                  <CardLink href="#">
                    Card Link
          </CardLink>
                  <CardLink href="#">
                    Another Link
          </CardLink>
                </CardBody>
              </Card>
            </p>
          </VerticalTimelineElement>


        </VerticalTimeline>




      </div>
    );
  }
}

export default Projects;
