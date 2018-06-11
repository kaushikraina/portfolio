import React, { Component } from 'react';
import { render } from 'react-dom';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Schooling extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>

<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="june 2017 - Aug 2017"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">All India Centre of Technical Education</h3>
    <h4 className="vertical-timeline-element-subtitle">Android Application Developer</h4>
    <p>
      <ul>
        <li>Lead team of 5 members</li>
        <li>Build application which achieved more than  1000 downloads on Playstore</li>
        <li> Worked on firebase Push notification, JSON communication , product Optimizations</li>
        </ul>
        </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="june 2017- July 2017"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Defence Terrain Research Laboratory,DRDO </h3>
    <h4 className="vertical-timeline-element-subtitle">Software Developer</h4>
    
       <p>
      <ul>
        <li>Implemented mathematical algorithms and theorms in C Sharp and Visual Studio</li>
        <li>Implemented Analytical Hirarchy Process Which improved the precesion in decision making by 50%</li>
      </ul> 
    
    </p>
  </VerticalTimelineElement>

</VerticalTimeline>   
   
      
      </div>
    );
  }
}

export default Schooling;
