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
    date="2014-2018"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Maharaja Agrasen
Institute of
Technology</h3>
    <h4 className="vertical-timeline-element-subtitle">New Delhi,India</h4>
    <p>
      <ul>
        <li>Bachleor in technology , Computer Science</li>
        <li>71.371 %</li>
      </ul> 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2013-2014"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Maharaja Hari
Singh Agricultural
Collegiate School</h3>
    <h4 className="vertical-timeline-element-subtitle">Jammu and kashmir , India</h4>
    
       <p>
      <ul>
        <li>Senior Secondary Schooling</li>
        <li>89.4 %</li>
      </ul> 
    
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2011-2012"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Maharaja Hari
Singh Agricultural
Collegiate School</h3>
    <h4 className="vertical-timeline-element-subtitle">Jammu and kashmir , India</h4>
    <p>
      <ul>
        <li>Secondary Schooling, Maths</li>
        <li>81.7 %</li>
      </ul> 
    </p>
  </VerticalTimelineElement>

</VerticalTimeline>   
   
      
      </div>
    );
  }
}

export default Schooling;
