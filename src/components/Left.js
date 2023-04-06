import React, { Component } from 'react';
import uniqid from 'uniqid';
import ProfilePicture from '../images/blank-profile-picture-973460.svg';
import Picture from './Picture';
import Contact from './Contact';
import Education from './Education';
import Expertise from './Expertise';
import Language from './Language';

class Left extends Component {
  constructor() {
    super();
    this.state = {
      picture: ProfilePicture,
      phone: '555-1234',
      email: 'someone@org.com',
      address: 'Fun Blvd',
      education: [
        {
          id: uniqid(),
          year: '2008',
          degree: 'Superior MasterBrain',
          university: 'Book Uni',
        },
        {
          id: uniqid(),
          year: '2008',
          degree: 'Superior MasterBrain',
          university: 'Book Uni',
        },
      ],
      expertise: [
        {
          id: uniqid(),
          skill: 'UI/UX',
        },
        {
          id: uniqid(),
          skill: 'Visual Design',
        },
        {
          id: uniqid(),
          skill: 'Wireframes',
        },
        {
          id: uniqid(),
          skill: 'Storyboards',
        },
        {
          id: uniqid(),
          skill: 'User Flows',
        },
        {
          id: uniqid(),
          skill: 'Process Flows',
        },
      ],
      language: [
        {
          id: uniqid(),
          lang: 'English',
        },
        {
          id: uniqid(),
          lang: 'Espanol',
        },
      ],
    };
  }

  render() {
    const { picture, phone, email, address, education, expertise, language } =
      this.state;
    return (
      <div>
        <Picture picture={picture} />
        <Contact phone={phone} email={email} address={address} />
        <Education education={education} />
        <Expertise expertise={expertise} />
        <Language language={language} />
      </div>
    );
  }
}

export default Left;
