import React, { Component } from 'react';
import uniqid from 'uniqid';
import PlusImg from '../images/plus.svg';
import CancelImg from '../images/x.svg';
import SaveImg from '../images/check.svg';
import DeleteImg from '../images/trash-2.svg';

class Education extends Component {
  constructor(props) {
    super(props);
    this.editElement = this.editElement.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleDegreeChange = this.handleDegreeChange.bind(this);
    this.handleUniversityChange = this.handleUniversityChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormCancel = this.handleFormCancel.bind(this);
    this.handleFormDelete = this.handleFormDelete.bind(this);
    this.addElement = this.addElement.bind(this);
    this.state = {
      isEditingID: '-1',
      isAdding: false,
      yearInput: '',
      degreeInput: '',
      universityInput: '',
      education: [
        {
          id: uniqid(),
          year: '2008',
          degree: 'Superior MasterBrain',
          university: 'Book Uni',
        },
        {
          id: uniqid(),
          year: '2008',
          degree: 'Superior MasterBrain',
          university: 'Book Uni',
        },
      ],
    };
  }

  handleYearChange(e) {
    this.setState({ yearInput: e.target.value });
  }

  handleDegreeChange(e) {
    this.setState({ degreeInput: e.target.value });
  }

  handleUniversityChange(e) {
    this.setState({ universityInput: e.target.value });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { yearInput, degreeInput, universityInput, education } = this.state;

    const itemID = e.target
      .closest('.education-item-form')
      .getAttribute('data-key');

    this.setState({
      isEditingID: '-1',
      yearInput: '',
      degreeInput: '',
      universityInput: '',
      education: education.map((item) => {
        if (item.id !== itemID) {
          return item;
        }
        return {
          id: itemID,
          year: yearInput,
          degree: degreeInput,
          university: universityInput,
        };
      }),
    });
  }

  handleFormCancel(e) {
    const { isAdding } = this.state;
    if (isAdding) {
      const itemID = e.target
        .closest('.education-item-form')
        .getAttribute('data-key');
      this.deleteElement(itemID);
    }

    this.setState({
      isEditingID: '-1',
      yearInput: '',
      degreeInput: '',
      universityInput: '',
    });
  }

  handleFormDelete(e) {
    const itemID = e.target
      .closest('.education-item-form')
      .getAttribute('data-key');
    this.deleteElement(itemID);
  }

  addElement() {
    const { education, isAdding } = this.state;
    if (!isAdding) {
      const newItemID = uniqid();
      this.setState({
        isEditingID: newItemID,
        isAdding: true,
        yearInput: '',
        degreeInput: '',
        universityInput: '',
        education: education.concat([
          {
            id: newItemID,
            year: '',
            degree: '',
            university: '',
          },
        ]),
      });
    }
  }

  deleteElement(id) {
    const { education } = this.state;
    this.setState({
      isAdding: false,
      isEditingID: '-1',
      yearInput: '',
      degreeInput: '',
      universityInput: '',
      education: education.filter((item) => item.id !== id),
    });
  }

  editElement(e) {
    const { education, isAdding, isEditingID } = this.state;
    if (isAdding) {
      this.deleteElement(isEditingID);
    }
    const itemID = e.target
      .closest('.education-item-wrapper')
      .getAttribute('data-key');
    const educationItem = education.find((item) => item.id === itemID);
    const yearInput = educationItem.year;
    const degreeInput = educationItem.degree;
    const universityInput = educationItem.university;

    this.setState({
      isEditingID: itemID,
      yearInput,
      degreeInput,
      universityInput,
    });
  }

  render() {
    const { education, isEditingID, yearInput, degreeInput, universityInput } =
      this.state;
    return (
      <div id="education">
        <div className="left-category">Education</div>
        <div className="wrapper">
          {education.map((item) => {
            if (item.id !== isEditingID) {
              return (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                <div
                  key={item.id}
                  data-key={item.id}
                  className="education-item-wrapper"
                  onClick={this.editElement}
                >
                  <div className="education-item">
                    <div className="year">{item.year}</div>
                    <div className="degree">{item.degree}</div>
                    <div className="university">{item.university}</div>
                  </div>
                </div>
              );
            }
            return (
              <div
                key={item.id}
                data-key={item.id}
                className="education-item-form"
              >
                <form onSubmit={this.handleFormSubmit}>
                  <label htmlFor="yearInput">
                    Year
                    <input
                      type="text"
                      id="yearInput"
                      onChange={this.handleYearChange}
                      value={yearInput}
                    />
                  </label>
                  <label htmlFor="degreeInput">
                    Degree
                    <input
                      type="text"
                      id="degreeInput"
                      onChange={this.handleDegreeChange}
                      value={degreeInput}
                    />
                  </label>
                  <label htmlFor="universityInput">
                    University
                    <input
                      type="text"
                      id="universityInput"
                      onChange={this.handleUniversityChange}
                      value={universityInput}
                    />
                  </label>
                  <div className="form-buttons">
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
            className="left-list-add"
          >
            <img src={PlusImg} alt="add" />
          </button>
        </div>
      </div>
    );
  }
}

export default Education;
