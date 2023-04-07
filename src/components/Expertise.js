import React, { Component } from 'react';

class Expertise extends Component {
  render() {
    const { expertise } = this.props;

    return (
      <div id="expertise">
        <div className="left-category">Expertise</div>
        <ul className="expertise-list">
          {expertise.map((item) => (
            <li key={item.id}>{item.skill}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Expertise;
