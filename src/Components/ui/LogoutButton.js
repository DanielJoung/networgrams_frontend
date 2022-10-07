import React, { Component } from "react";

class LogoutButton extends Component {
  handleClick = () => {
    localStorage.clear();
    window.location = "/";
  };

  render() {
    return (
      <a
        // className="button is-small"
        onClick={this.handleClick}
        id="log-out"
      >
        Sign Out
      </a>
    );
  }
}

export default LogoutButton;
