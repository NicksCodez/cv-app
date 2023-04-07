import React, { Component } from 'react';

class Language extends Component {
  render() {
    const { language } = this.props;

    return (
      <div id="expertise">
        <div className="left-category">Language</div>
        <div className="wrapper">
          {language.map((item) => (
            <div key={item.id}>{item.lang}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Language;
