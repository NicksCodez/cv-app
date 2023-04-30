import React, { Component } from 'react';
import uniqid from 'uniqid';
import PlusImg from '../images/plus.svg';
import CancelImg from '../images/x.svg';
import SaveImg from '../images/check.svg';
import DeleteImg from '../images/trash-2.svg';

class Reference extends Component {
  constructor(props) {
    super(props);
    this.editElement = this.editElement.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleJobChange = this.handleJobChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormCancel = this.handleFormCancel.bind(this);
    this.handleFormDelete = this.handleFormDelete.bind(this);
    this.addElement = this.addElement.bind(this);
    this.state = {
      isEditingID: '-1',
      isAdding: false,
      nameInput: '',
      jobInput: '',
      phoneInput: '',
      emailInput: '',
      reference: [
        {
          id: uniqid(),
          name: 'Name Surname',
          job: 'Job phone, job Name',
          phone: '555-1234',
          email: 'someone@org.com',
        },
        {
          id: uniqid(),
          name: 'Name Surname',
          job: 'Job phone, job Name',
          phone: '555-1234',
          email: 'someone@org.com',
        },
      ],
    };
  }

  handleNameChange(e) {
    this.setState({ nameInput: e.target.value });
  }

  handleJobChange(e) {
    this.setState({ jobInput: e.target.value });
  }

  handlePhoneChange(e) {
    this.setState({ phoneInput: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ emailInput: e.target.value });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { nameInput, jobInput, phoneInput, emailInput, reference } =
      this.state;

    const itemID = e.target
      .closest('.reference-form-wrapper')
      .getAttribute('data-key');

    this.setState({
      isEditingID: '-1',
      isAdding: false,
      nameInput: '',
      jobInput: '',
      phoneInput: '',
      emailInput: '',
      reference: reference.map((item) => {
        if (item.id !== itemID) {
          return item;
        }
        return {
          id: itemID,
          name: nameInput,
          job: jobInput,
          phone: phoneInput,
          email: emailInput,
        };
      }),
    });
  }

  handleFormCancel(e) {
    const { isAdding } = this.state;
    if (isAdding) {
      const itemID = e.target
        .closest('.reference-form-wrapper')
        .getAttribute('data-key');
      this.deleteElement(itemID);
    }

    this.setState({
      isEditingID: '-1',
      nameInput: '',
      jobInput: '',
      phoneInput: '',
    });
  }

  handleFormDelete(e) {
    const itemID = e.target
      .closest('.reference-form-wrapper')
      .getAttribute('data-key');
    this.deleteElement(itemID);
  }

  addElement() {
    const { reference, isAdding } = this.state;
    if (!isAdding) {
      const newItemID = uniqid();
      this.setState({
        isEditingID: newItemID,
        isAdding: true,
        nameInput: '',
        jobInput: '',
        phoneInput: '',
        emailInput: '',
        reference: reference.concat([
          {
            id: newItemID,
            name: '',
            job: '',
            phone: '',
            email: '',
          },
        ]),
      });
    }
  }

  deleteElement(id) {
    const { reference } = this.state;
    this.setState({
      isAdding: false,
      isEditingID: '-1',
      nameInput: '',
      jobInput: '',
      phoneInput: '',
      reference: reference.filter((item) => item.id !== id),
    });
  }

  editElement(e) {
    const { reference, isAdding, isEditingID } = this.state;
    if (isAdding) {
      this.deleteElement(isEditingID);
    }
    const itemID = e.target.closest('.wrapper').getAttribute('data-key');
    const referenceItem = reference.find((item) => item.id === itemID);
    const nameInput = referenceItem.name;
    const jobInput = referenceItem.job;
    const phoneInput = referenceItem.phone;
    const emailInput = referenceItem.email;

    this.setState({
      isEditingID: itemID,
      nameInput,
      jobInput,
      phoneInput,
      emailInput,
    });
  }

  render() {
    const {
      reference,
      isEditingID,
      nameInput,
      jobInput,
      phoneInput,
      emailInput,
    } = this.state;

    return (
      <div id="reference">
        <div className="right-category">Reference</div>
        <div className="reference-items">
          {reference.map((item) => {
            if (item.id !== isEditingID) {
              return (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                <div
                  key={item.id}
                  data-key={item.id}
                  className="wrapper"
                  onClick={this.editElement}
                >
                  <div className="reference-name">{item.name}</div>
                  <div className="reference-job">{item.job}</div>
                  <div className="reference-phone">{item.phone}</div>
                  <div className="reference-email">{item.email}</div>
                </div>
              );
            }
            return (
              <div
                key={item.id}
                data-key={item.id}
                className="reference-form-wrapper"
              >
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
                  <label htmlFor="jobInput" className="right-label">
                    Job
                    <input
                      type="text"
                      id="jobInput"
                      onChange={this.handleJobChange}
                      value={jobInput}
                      className="right-input"
                    />
                  </label>
                  <label htmlFor="phoneInput" className="right-label">
                    Phone
                    <input
                      type="text"
                      id="phoneInput"
                      onChange={this.handlePhoneChange}
                      value={phoneInput}
                      className="right-input"
                    />
                  </label>
                  <label htmlFor="emailInput" className="right-label">
                    Email
                    <textarea
                      id="emailInput"
                      onChange={this.handleEmailChange}
                      value={emailInput}
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
                    <button type="button" onClick={this.handleFormDelete}>
                      <img src={DeleteImg} alt="delete" />
                    </button>
                  </div>
                </form>
              </div>
            );
          })}
          <button
            type="button"
            onClick={this.addElement}
            className="right-list-add"
          >
            <img src={PlusImg} alt="add" />
          </button>
        </div>
      </div>
    );
  }
}

export default Reference;
