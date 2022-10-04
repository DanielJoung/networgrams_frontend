import React, { Component } from "react";

class LogoutButton extends Component {
  handleClick = () => {
    localStorage.clear();
  };

  render() {
    return (
      <a className="button is-small" href="/" onClick={this.handleClick}>
        Sign Out
      </a>
    );
  }
}

export default LogoutButton;
