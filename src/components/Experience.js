import React, { Component } from 'react';

class Experience extends Component {
  render() {
    const { experience } = this.props;

    return (
      <div id="experience">
        <div className="right-category">Experience</div>
        <div className="experience-items">
          {experience.map((item) => (
            <div key={item.id} className="wrapper">
              <div className="experience-period">{item.period}</div>
              <div className="experience-company">{item.company}</div>
              <div className="experience-position">{item.position}</div>
              <div className="experience-description">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Experience;
