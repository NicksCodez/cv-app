import React, { Component } from 'react';

class Reference extends Component {
  render() {
    const { reference } = this.props;

    return (
      <div className="wrapper">
        {reference.map((item) => (
          <div key={item.id} className="reference">
            <div>{item.name}</div>
            <div>{item.job}</div>
            <div>{item.phone}</div>
            <div>{item.email}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Reference;
