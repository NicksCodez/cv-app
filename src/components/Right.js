import React, { Component } from 'react';
import About from './About';
import Experience from './Experience';
import Reference from './Reference';

import '../styles/right.css';

class Right extends Component {
  constructor() {
    super();
    this.state = {};
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
