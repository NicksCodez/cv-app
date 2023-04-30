import React, { Component } from 'react';
import uniqid from 'uniqid';
import PlusImg from '../images/plus.svg';
import CancelImg from '../images/x.svg';
import SaveImg from '../images/check.svg';
import DeleteImg from '../images/trash-2.svg';

class Language extends Component {
  constructor(props) {
    super(props);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormCancel = this.handleFormCancel.bind(this);
    this.handleFormDelete = this.handleFormDelete.bind(this);
    this.addElement = this.addElement.bind(this);
    this.editElement = this.editElement.bind(this);
    this.state = {
      isEditingID: '-1',
      isAdding: false,
      languageInput: '',
      language: [
        {
          id: uniqid(),
          language: 'English',
        },
        {
          id: uniqid(),
          language: 'Espanol',
        },
      ],
    };
  }

  handleLanguageChange(e) {
    this.setState({ languageInput: e.target.value });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { languageInput, language } = this.state;

    const itemID = e.target
      .closest('.language-item-form')
      .getAttribute('data-key');

    this.setState({
      isEditingID: '-1',
      isAdding: false,
      languageInput: '',
      language: language.map((item) => {
        if (item.id !== itemID) {
          return item;
        }
        return {
          id: itemID,
          language: languageInput,
        };
      }),
    });
  }

  handleFormCancel(e) {
    const { isAdding } = this.state;
    if (isAdding) {
      const itemID = e.target
        .closest('.language-item-form')
        .getAttribute('data-key');
      this.deleteElement(itemID);
    }

    this.setState({
      isEditingID: '-1',
      isAdding: false,
      languageInput: '',
    });
  }

  handleFormDelete(e) {
    const itemID = e.target
      .closest('.language-item-form')
      .getAttribute('data-key');
    this.deleteElement(itemID);
  }

  addElement() {
    const { language, isAdding } = this.state;
    if (!isAdding) {
      const newItemID = uniqid();
      this.setState({
        isEditingID: newItemID,
        isAdding: true,
        languageInput: '',
        language: language.concat([
          {
            id: newItemID,
            language: '',
          },
        ]),
      });
    }
  }

  deleteElement(id) {
    const { language } = this.state;
    this.setState({
      isAdding: false,
      isEditingID: '-1',
      languageInput: '',
      language: language.filter((item) => item.id !== id),
    });
  }

  editElement(e) {
    const { language, isAdding, isEditingID } = this.state;
    if (isAdding) {
      this.deleteElement(isEditingID);
    }
    const itemID = e.target
      .closest('.language-item-wrapper')
      .getAttribute('data-key');
    const languageItem = language.find((item) => item.id === itemID);
    const languageInput = languageItem.language;

    this.setState({
      isEditingID: itemID,
      isAdding: false,
      languageInput,
    });
  }

  render() {
    const { language, isEditingID, languageInput } = this.state;

    return (
      <div id="language">
        <div className="left-category">Language</div>
        <div className="wrapper">
          {language.map((item) => {
            if (item.id !== isEditingID) {
              return (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                <div
                  key={item.id}
                  data-key={item.id}
                  onClick={this.editElement}
                  className="language-item-wrapper"
                >
                  {item.language}
                </div>
              );
            }
            return (
              <div
                key={item.id}
                data-key={item.id}
                className="language-item-form"
              >
                <form onSubmit={this.handleFormSubmit}>
                  <label htmlFor="languageInput">
                    Language
                    <input
                      type="text"
                      id="languageInput"
                      onChange={this.handleLanguageChange}
                      value={languageInput}
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

export default Language;
