import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <p id="welcome_p"> welcome {this.props.id}</p>;
  }
}

export default Welcome;
