import React, { Component } from 'react';

class Contact extends Component {
  render() {
    const { phone, email, address } = this.props;

    return (
      <div id="contact">
        <div className="left-category">Contact</div>
        <div className="wrapper">
          <div className="contact-item">
            <div className="contact-item-title">Phone</div>
            <div>{phone}</div>
          </div>
          <div className="contact-item">
            <div className="contact-item-title">Email</div>
            <div>{email}</div>
          </div>
          <div className="contact-item">
            <div className="contact-item-title">Address</div>
            <div>{address}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
