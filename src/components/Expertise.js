import React, { Component } from 'react';
import uniqid from 'uniqid';
import PlusImg from '../images/plus.svg';
import CancelImg from '../images/x.svg';
import SaveImg from '../images/check.svg';
import DeleteImg from '../images/trash-2.svg';

class Expertise extends Component {
  constructor(props) {
    // const testID = uniqid();
    super(props);
    this.handleSkillChange = this.handleSkillChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormCancel = this.handleFormCancel.bind(this);
    this.handleFormDelete = this.handleFormDelete.bind(this);
    this.addElement = this.addElement.bind(this);
    this.editElement = this.editElement.bind(this);
    this.state = {
      isEditingID: '-1',
      isAdding: false,
      skillInput: '',
      expertise: [
        {
          id: uniqid(),
          skill: 'UI/UX',
        },
        {
          id: uniqid(),
          skill: 'Visual Design',
        },
        {
          id: uniqid(),
          skill: 'Wireframes',
        },
        {
          id: uniqid(),
          skill: 'Storyboards',
        },
        {
          id: uniqid(),
          skill: 'User Flows',
        },
        {
          id: uniqid(),
          skill: 'Process Flows',
        },
      ],
    };
  }

  handleSkillChange(e) {
    this.setState({ skillInput: e.target.value });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { skillInput, expertise } = this.state;

    const itemID = e.target
      .closest('.expertise-item-form')
      .getAttribute('data-key');

    this.setState({
      isEditingID: '-1',
      isAdding: false,
      skillInput: '',
      expertise: expertise.map((item) => {
        if (item.id !== itemID) {
          return item;
        }
        return {
          id: itemID,
          skill: skillInput,
        };
      }),
    });
  }

  handleFormCancel(e) {
    const { isAdding } = this.state;
    if (isAdding) {
      const itemID = e.target
        .closest('.expertise-item-form')
        .getAttribute('data-key');
      this.deleteElement(itemID);
    }

    this.setState({
      isEditingID: '-1',
      isAdding: false,
      skillInput: '',
    });
  }

  handleFormDelete(e) {
    const itemID = e.target
      .closest('.expertise-item-form')
      .getAttribute('data-key');
    this.deleteElement(itemID);
  }

  addElement() {
    const { expertise, isAdding } = this.state;
    if (!isAdding) {
      const newItemID = uniqid();
      this.setState({
        isEditingID: newItemID,
        isAdding: true,
        skillInput: '',
        expertise: expertise.concat([
          {
            id: newItemID,
            skill: '',
          },
        ]),
      });
    }
  }

  deleteElement(id) {
    const { expertise } = this.state;
    this.setState({
      isAdding: false,
      isEditingID: '-1',
      skillInput: '',
      expertise: expertise.filter((item) => item.id !== id),
    });
  }

  editElement(e) {
    const { expertise, isAdding, isEditingID } = this.state;
    if (isAdding) {
      this.deleteElement(isEditingID);
    }
    const itemID = e.target
      .closest('.expertise-item-wrapper')
      .getAttribute('data-key');
    const expertiseItem = expertise.find((item) => item.id === itemID);
    const skillInput = expertiseItem.skill;

    this.setState({
      isEditingID: itemID,
      isAdding: false,
      skillInput,
    });
  }

  render() {
    const { expertise, isEditingID, skillInput } = this.state;
    return (
      <div id="expertise">
        <div className="left-category">Expertise</div>
        <ul className="expertise-list">
          {expertise.map((item) => {
            if (item.id !== isEditingID) {
              return (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                <li
                  key={item.id}
                  data-key={item.id}
                  onClick={this.editElement}
                  className="expertise-item-wrapper"
                >
                  {item.skill}
                </li>
              );
            }
            return (
              <li
                key={item.id}
                data-key={item.id}
                className="expertise-item-form"
              >
                <form onSubmit={this.handleFormSubmit}>
                  <label htmlFor="skillInput">
                    Skill
                    <input
                      type="text"
                      id="skillInput"
                      onChange={this.handleSkillChange}
                      value={skillInput}
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
              </li>
            );
          })}
        </ul>
        <div className="wrapper">
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

export default Expertise;
