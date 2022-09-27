import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleRegister = () => {
    fetch("http://localhost:3003/networgram/user/register", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((resJson) => {});
  };

  render() {
    return (
      <>
        <h1>Register</h1>
      </>
    );
  }
}

export default Register;
