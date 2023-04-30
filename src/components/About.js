import React, { Component } from 'react';
import SaveImg from '../images/check.svg';
import CancelImg from '../images/x.svg';

class About extends Component {
  constructor(props) {
    super(props);
    this.editElement = this.editElement.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormCancel = this.handleFormCancel.bind(this);
    this.state = {
      isEditing: false,
      name: 'John Doe',
      position: 'Professional Slacker',
      description: 'Best employee you will ever have, period.',
      nameInput: '',
      positionInput: '',
      descriptionInput: '',
    };
  }

  handleNameChange(e) {
    this.setState({ nameInput: e.target.value });
  }

  handlePositionChange(e) {
    this.setState({ positionInput: e.target.value });
  }

  handleDescriptionChange(e) {
    this.setState({ descriptionInput: e.target.value });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { nameInput, positionInput, descriptionInput } = this.state;
    this.setState({
      isEditing: false,
      name: nameInput,
      position: positionInput,
      description: descriptionInput,
      nameInput: '',
      positionInput: '',
      descriptionInput: '',
    });
  }

  handleFormCancel() {
    this.setState({
      isEditing: false,
      nameInput: '',
      positionInput: '',
      descriptionInput: '',
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
      name,
      position,
      description,
      isEditing,
      nameInput,
      positionInput,
      descriptionInput,
    } = this.state;
    if (!isEditing) {
      return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div id="about" onClick={this.editElement}>
          <div id="name">{name}</div>
          <div id="position">{position}</div>
          <div id="description">{description}</div>
        </div>
      );
    }
    return (
      <div className="form-wrapper">
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="nameInput" className="right-label">
            Name
            <input
              type="text"
              id="nameInput"
              onChange={this.handleNameChange}
              value={nameInput}
              className="right-input"
            />
          </label>
          <label htmlFor="positionInput" className="right-label">
            Position
            <input
              type="text"
              id="positionInput"
              onChange={this.handlePositionChange}
              value={positionInput}
              className="right-input"
            />
          </label>
          <label htmlFor="descriptionInput" className="right-label">
            Description
            <textarea
              id="descriptionInput"
              onChange={this.handleDescriptionChange}
              value={descriptionInput}
              className="right-input"
            />
          </label>
          <div className="right-form-buttons">
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
}

export default About;
