import React, { Component, useState } from 'react';
import ProfilePicture from '../images/blank-profile-picture-973460.svg';

class Picture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: ProfilePicture,
    };
  }

  // handleChange(e) {
  //   const [file, setFile] = useState();
  //   console.log(e.target.files);
  //   setFile(URL.createObjectURL(e.target.files[0]));
  //   this.setState({
  //     picture: file,
  //   });
  // }

  render() {
    const { picture } = this.state;
    return (
      <div id="picture">
        {/* <input type="file" onChange={this.handleChange} /> */}
        <img src={picture} alt="profile" className="left-profile-picture" />
      </div>
    );
  }
}

export default Picture;
