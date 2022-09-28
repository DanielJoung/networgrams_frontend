import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.setState = {
      name: "",
      password: "",
      id: "",
    };
  }

  render() {
    return <h1>Log in</h1>;
  }
}

export default Login;
