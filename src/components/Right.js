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
      about: {
        name: 'John Doe',
        position: 'Professional Slacker',
        description: 'Best employee you will ever have, period.',
      },
      experience: [
        {
          id: uniqid(),
          period: '2008',
          company: 'Superior MasterBrain',
          position: 'Book Uni',
          description: 'working hard or hardly working',
        },
        {
          id: uniqid(),
          period: '2008',
          company: 'Superior MasterBrain',
          position: 'Book Uni',
          description: 'working hard or hardly working',
        },
        {
          id: uniqid(),
          period: '2008',
          company: 'Superior MasterBrain',
          position: 'Book Uni',
          description: 'working hard or hardly working',
        },
      ],
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
    const { about, experience, reference } = this.state;

    return (
      <div id="right">
        <About about={about} />
        <Experience experience={experience} />
        <Reference reference={reference} />
      </div>
    );
  }
}

export default Right;
