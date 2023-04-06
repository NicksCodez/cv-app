import React, { Component } from 'react';

class Language extends Component {
  render() {
    const { language } = this.props;

    return (
      <div>
        {language.map((item) => (
          <div key={item.id}>{item.lang}</div>
        ))}
      </div>
    );
  }
}

export default Language;
