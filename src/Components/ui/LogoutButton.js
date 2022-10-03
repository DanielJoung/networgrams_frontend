import React, { Component } from "react";

class LogoutButton extends Component {
  handleClick = () => {
    localStorage.clear();
  };

  render() {
    return (
      <a
        className="is-danger is-rounded button"
        href="/"
        onClick={this.handleClick}
      >
        Sign Out
      </a>
    );
  }
}

export default LogoutButton;
