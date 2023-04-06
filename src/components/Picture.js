import React, { Component } from 'react';

class Picture extends Component {
  render() {
    const { picture } = this.props;
    return <img src={picture} alt="profile" />;
  }
}

export default Picture;
