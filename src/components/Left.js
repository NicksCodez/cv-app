import React, { Component } from 'react';
import ProfilePicture from '../images/blank-profile-picture-973460.svg';
import Picture from './Picture';
import Contact from './Contact';
import Education from './Education';
import Expertise from './Expertise';
import Language from './Language';

import '../styles/left.css';

class Left extends Component {
  constructor() {
    super();
    this.state = {
      picture: ProfilePicture,
    };
  }

  render() {
    const { picture, education, expertise, language } = this.state;
    return (
      <div id="left">
        {/* <Picture picture={picture} /> */}
        <Contact />
        <Education education={education} />
        <Expertise expertise={expertise} />
        <Language language={language} />
      </div>
    );
  }
}

export default Left;
