import React, { Component } from 'react';

class Contact extends Component {
  render() {
    const { phone, email, address } = this.props;

    return (
      <div>
        <div className="wrapper">
          <div>Phone</div>
          <div>{phone}</div>
        </div>
        <div className="wrapper">
          <div>Email</div>
          <div>{email}</div>
        </div>
        <div className="wrapper">
          <div>Address</div>
          <div>{address}</div>
        </div>
      </div>
    );
  }
}

export default Contact;
