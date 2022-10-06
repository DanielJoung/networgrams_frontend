import React, { Component } from "react";

class LogoutButton extends Component {
  handleClick = () => {
    localStorage.clear();
    window.location = "/";
  };

  render() {
    return (
      <a className="button is-small" onClick={this.handleClick}>
        Sign Out
      </a>
    );
  }
}

export default LogoutButton;
