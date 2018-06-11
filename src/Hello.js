import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import Summary from './components/summary/summary.js';
import Schooling from './components/schooling/schooling.js';
import Achievements from './components/achievements/achievements.js';
import Projects from './components/projects/projects.js';
import Skills from './components/skills/skills.js';
import Experience from './components/experience/experience.js';
import Contact from './components/contacts/contact.js';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
      <div>

        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Summary
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Experience
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
             Schooling
              
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
            Achievements
              
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >
            Projects
              
            </NavLink>
          </NavItem>

            <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '6' })}
              onClick={() => { this.toggle('6'); }}
            >
            Skills
              
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '7' })}
              onClick={() => { this.toggle('7'); }}
            >
            Contact
              
            </NavLink>
          </NavItem>
          
        </Nav>

        <TabContent activeTab={this.state.activeTab}>

          <TabPane tabId="1">
            <Summary/>
          </TabPane>

          <TabPane tabId="2">
           <Experience/>
          </TabPane>

          <TabPane tabId="3">
           <Schooling/>
            
          </TabPane> 

          <TabPane tabId="4">
          <Achievements/>
            
          </TabPane>

          <TabPane tabId="5">
          <Projects/>
            
          </TabPane>

          <TabPane tabId="6">
          <Skills/>
           
          </TabPane>

          <TabPane tabId="7">
           <Contact/>
            
          </TabPane>

        </TabContent>


      </div>
      </div>
    );
  }
}
