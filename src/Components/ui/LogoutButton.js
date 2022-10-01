import React, { Component } from "react";

class LogoutButton extends Component {
  constructor() {
    super();
  }

  getLogout = (e) => {
    e.preventdefault();
    fetch(`${process.env.REACT_APP_BACKEND_URL}/networgram/user/signout`, {
      method: "DELETE",
    });
  };

  render() {
    return (
      <a
        className="is-danger is-rounded button"
        href="/"
        onSubmit={this.getLogout}
      >
        Sign Out
      </a>
    );
  }
}

export default LogoutButton;
