import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <p id="welcome_p"> Welcome, {this.props.id}</p>;
  }
}

export default Welcome;
