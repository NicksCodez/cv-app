import React, { Component } from 'react';

class Experience extends Component {
  render() {
    const { experience } = this.props;

    return (
      <div className="wrapper">
        {experience.map((item) => (
          <div key={item.id} className="experience">
            <div>{item.period}</div>
            <div>{item.company}</div>
            <div>{item.position}</div>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Experience;
