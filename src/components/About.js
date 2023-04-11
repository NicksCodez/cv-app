import React, { Component } from 'react';

class About extends Component {
  render() {
    const { about } = this.props;

    return (
      <div id="about">
        <div id="name">{about.name}</div>
        <div id="position">{about.position}</div>
        <div id="description">{about.description}</div>
      </div>
    );
  }
}

export default About;
