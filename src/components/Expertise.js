import React, { Component } from 'react';

class Expertise extends Component {
  render() {
    const { expertise } = this.props;

    return (
      <ul className="wrapper">
        {expertise.map((item) => (
          <li key={item.id}>{item.skill}</li>
        ))}
      </ul>
    );
  }
}

export default Expertise;
