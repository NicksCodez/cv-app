import React, { Component } from 'react';
import uniqid from 'uniqid';
import PlusImg from '../images/plus.svg';
import CancelImg from '../images/x.svg';
import SaveImg from '../images/check.svg';
import DeleteImg from '../images/trash-2.svg';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.editElement = this.editElement.bind(this);
    this.handlePeriodChange = this.handlePeriodChange.bind(this);
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormCancel = this.handleFormCancel.bind(this);
    this.handleFormDelete = this.handleFormDelete.bind(this);
    this.addElement = this.addElement.bind(this);
    this.state = {
      isEditingID: '-1',
      isAdding: false,
      periodInput: '',
      companyInput: '',
      positionInput: '',
      descriptionInput: '',
      experience: [
        {
          id: uniqid(),
          period: '2008',
          company: 'Superior MasterBrain',
          position: 'Book Uni',
          description: 'working hard or hardly working',
        },
        {
          id: uniqid(),
          period: '2008',
          company: 'Superior MasterBrain',
          position: 'Book Uni',
          description: 'working hard or hardly working',
        },
        {
          id: uniqid(),
          period: '2008',
          company: 'Superior MasterBrain',
          position: 'Book Uni',
          description: 'working hard or hardly working',
        },
      ],
    };
  }

  handlePeriodChange(e) {
    this.setState({ periodInput: e.target.value });
  }

  handleCompanyChange(e) {
    this.setState({ companyInput: e.target.value });
  }

  handlePositionChange(e) {
    this.setState({ positionInput: e.target.value });
  }

  handleDescriptionChange(e) {
    this.setState({ descriptionInput: e.target.value });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const {
      periodInput,
      companyInput,
      positionInput,
      descriptionInput,
      experience,
    } = this.state;

    const itemID = e.target
      .closest('.experience-form-wrapper')
      .getAttribute('data-key');

    this.setState({
      isEditingID: '-1',
      isAdding: false,
      periodInput: '',
      companyInput: '',
      positionInput: '',
      descriptionInput: '',
      experience: experience.map((item) => {
        if (item.id !== itemID) {
          return item;
        }
        return {
          id: itemID,
          period: periodInput,
          company: companyInput,
          position: positionInput,
          description: descriptionInput,
        };
      }),
    });
  }

  handleFormCancel(e) {
    const { isAdding } = this.state;
    if (isAdding) {
      const itemID = e.target
        .closest('.experience-form-wrapper')
        .getAttribute('data-key');
      this.deleteElement(itemID);
    }

    this.setState({
      isEditingID: '-1',
      periodInput: '',
      companyInput: '',
      positionInput: '',
    });
  }

  handleFormDelete(e) {
    const itemID = e.target
      .closest('.experience-form-wrapper')
      .getAttribute('data-key');
    this.deleteElement(itemID);
  }

  addElement() {
    const { experience, isAdding } = this.state;
    if (!isAdding) {
      const newItemID = uniqid();
      this.setState({
        isEditingID: newItemID,
        isAdding: true,
        periodInput: '',
        companyInput: '',
        positionInput: '',
        descriptionInput: '',
        experience: experience.concat([
          {
            id: newItemID,
            period: '',
            company: '',
            position: '',
            description: '',
          },
        ]),
      });
    }
  }

  deleteElement(id) {
    const { experience } = this.state;
    this.setState({
      isAdding: false,
      isEditingID: '-1',
      periodInput: '',
      companyInput: '',
      positionInput: '',
      experience: experience.filter((item) => item.id !== id),
    });
  }

  editElement(e) {
    const { experience, isAdding, isEditingID } = this.state;
    if (isAdding) {
      this.deleteElement(isEditingID);
    }
    const itemID = e.target.closest('.wrapper').getAttribute('data-key');
    const experienceItem = experience.find((item) => item.id === itemID);
    const periodInput = experienceItem.period;
    const companyInput = experienceItem.company;
    const positionInput = experienceItem.position;
    const descriptionInput = experienceItem.description;

    this.setState({
      isEditingID: itemID,
      periodInput,
      companyInput,
      positionInput,
      descriptionInput,
    });
  }

  render() {
    const {
      experience,
      isEditingID,
      periodInput,
      companyInput,
      positionInput,
      descriptionInput,
    } = this.state;

    return (
      <div id="experience">
        <div className="right-category">Experience</div>
        <div className="experience-items">
          {experience.map((item) => {
            if (item.id !== isEditingID) {
              return (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                <div
                  key={item.id}
                  data-key={item.id}
                  className="wrapper"
                  onClick={this.editElement}
                >
                  <div className="experience-period">{item.period}</div>
                  <div className="experience-company">{item.company}</div>
                  <div className="experience-position">{item.position}</div>
                  <div className="experience-description">
                    {item.description}
                  </div>
                </div>
              );
            }
            return (
              <div
                key={item.id}
                data-key={item.id}
                className="experience-form-wrapper"
              >
                <form onSubmit={this.handleFormSubmit}>
                  <label htmlFor="periodInput" className="right-label">
                    Period
                    <input
                      type="text"
                      id="periodInput"
                      onChange={this.handlePeriodChange}
                      value={periodInput}
                      className="right-input"
                    />
                  </label>
                  <label htmlFor="companyInput" className="right-label">
                    Company
                    <input
                      type="text"
                      id="companyInput"
                      onChange={this.handleCompanyChange}
                      value={companyInput}
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

export default Experience;
