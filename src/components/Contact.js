import React, { Component } from 'react';
import SaveImg from '../images/check.svg';
import CancelImg from '../images/x.svg';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.editElement = this.editElement.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormCancel = this.handleFormCancel.bind(this);
    this.state = {
      isEditing: false,
      phone: '555-1234',
      email: 'someone@org.com',
      address: 'Fun Blvd',
      phoneInput: '',
      emailInput: '',
      addressInput: '',
    };
  }

  handlePhoneChange(e) {
    this.setState({ phoneInput: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ emailInput: e.target.value });
  }

  handleAddressChange(e) {
    this.setState({ addressInput: e.target.value });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { phoneInput, emailInput, addressInput } = this.state;
    this.setState({
      isEditing: false,
      phone: phoneInput,
      email: emailInput,
      address: addressInput,
      phoneInput: '',
      emailInput: '',
      addressInput: '',
    });
  }

  handleFormCancel() {
    this.setState({
      isEditing: false,
      phoneInput: '',
      emailInput: '',
      addressInput: '',
    });
  }

  editElement() {
    const { isEditing } = this.state;
    if (!isEditing) {
      this.setState({
        isEditing: true,
      });
    }
  }

  render() {
    const {
      isEditing,
      phone,
      email,
      address,
      phoneInput,
      emailInput,
      addressInput,
    } = this.state;
    let contact;

    if (isEditing === false) {
      contact = (
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
      );
    } else {
      contact = (
        <div className="form-wrapper">
          <form onSubmit={this.handleFormSubmit}>
            <label htmlFor="phoneInput">
              Phone
              <input
                type="text"
                id="phoneInput"
                onChange={this.handlePhoneChange}
                value={phoneInput}
              />
            </label>
            <label htmlFor="emailInput">
              Email
              <input
                type="text"
                id="emailInput"
                onChange={this.handleEmailChange}
                value={emailInput}
              />
            </label>
            <label htmlFor="addressInput">
              Address
              <input
                type="text"
                id="addressInput"
                onChange={this.handleAddressChange}
                value={addressInput}
              />
            </label>
            <div className="form-buttons">
              <button type="submit">
                <img src={SaveImg} alt="save" />
              </button>
              <button type="button" onClick={this.handleFormCancel}>
                <img src={CancelImg} alt="cancel" />
              </button>
            </div>
          </form>
        </div>
      );
    }

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <div id="contact" onClick={this.editElement}>
        <div className="left-category">Contact</div>
        {contact}
      </div>
    );
  }
}

export default Contact;
