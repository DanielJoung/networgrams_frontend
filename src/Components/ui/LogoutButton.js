import React, { Component } from "react";

class LogoutButton extends Component {
  handleClick = () => {
    localStorage.clear();
    window.location = "/";
  };

  render() {
    return (
      <a
        onClick={this.handleClick}
        id="sign-btn"
      >
        Sign Out
      </a>
    );
  }
}

export default LogoutButton;
