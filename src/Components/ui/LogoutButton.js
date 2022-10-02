import React, { Component } from "react";

class LogoutButton extends Component {
  getLogout = (e) => {
    e.preventdefault();
    fetch(`${process.env.REACT_APP_BACKEND_URL}/networgram/user/signout`, {
      method: "DELETE",
    })
      .then((json) => console.log(json))
      .then((data) => console.log(data));
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
