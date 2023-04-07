import React, { Component } from 'react';

import Left from './Left';
import Right from './Right';

import '../styles/app.css';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Left />
        <Right />
      </div>
    );
  }
}

export default App;
