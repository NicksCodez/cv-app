import React, { Component } from 'react';

class Reference extends Component {
  render() {
    const { reference } = this.props;

    return (
      <div id="reference">
        <div className="right-category">Reference</div>
        <div className="reference-items">
          {reference.map((item) => (
            <div key={item.id} className="wrapper">
              <div className="reference-name">{item.name}</div>
              <div className="reference-job">{item.job}</div>
              <div className="reference-phone">{item.phone}</div>
              <div className="reference-email">{item.email}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Reference;
