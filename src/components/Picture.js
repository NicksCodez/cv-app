import React, { Component } from 'react';

class Picture extends Component {
  render() {
    const { picture } = this.props;
    return <img src={picture} alt="profile" className="left-profile-picture" />;
  }
}

export default Picture;
