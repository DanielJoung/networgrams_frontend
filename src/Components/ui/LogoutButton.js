import React, { Component } from "react";

class LogoutButton extends Component {
  handleClick = () => {
    localStorage.clear();
    window.location = "/";
  };

  render() {
    return (
      <p id="log-out">
      <a 
      // className="button is-small" 
      onClick={this.handleClick}>
        Sign Out
      </a></p>
    );
  }
}

export default LogoutButton;
