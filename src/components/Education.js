import React, { Component } from 'react';

class Education extends Component {
  render() {
    const { education } = this.props;
    return (
      <div className="wrapper">
        {education.map((item) => (
          <div key={item.id} className="wrapper">
            <div className="year">{item.year}</div>
            <div className="degree">{item.degree}</div>
            <div className="university">{item.university}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Education;
