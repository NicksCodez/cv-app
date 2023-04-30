import React, { Component } from 'react';
import uniqid from 'uniqid';
import About from './About';
import Experience from './Experience';
import Reference from './Reference';

import '../styles/right.css';

class Right extends Component {
  constructor() {
    super();
    this.state = {
      reference: [
        {
          id: uniqid(),
          name: 'Name Surname',
          job: 'Job Position, Company Name',
          phone: '555-1234',
          email: 'someone@org.com',
        },
        {
          id: uniqid(),
          name: 'Name Surname',
          job: 'Job Position, Company Name',
          phone: '555-1234',
          email: 'someone@org.com',
        },
      ],
    };
  }

  render() {
    const { experience, reference } = this.state;

    return (
      <div id="right">
        <About />
        <Experience experience={experience} />
        <Reference reference={reference} />
      </div>
    );
  }
}

export default Right;
