import React, { Component } from 'react';

class Education extends Component {
  render() {
    const { education } = this.props;
    return (
      <div id="education">
        <div className="left-category">Education</div>
        <div className="wrapper">
          {education.map((item) => (
            <div key={item.id} className="education-item">
              <div className="year">{item.year}</div>
              <div className="degree">{item.degree}</div>
              <div className="university">{item.university}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Education;
