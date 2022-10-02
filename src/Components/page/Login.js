import React, { Component } from "react";
import LoginButton from "../ui/LoginButton";
import CancelButton from "../ui/CancelButton";
import Header from "./Header";
import "bulma/css/bulma.min.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      password: "",
      error: "",
      success: true,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  postUser = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/networgram/user/signin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: this.state.id,
          password: this.state.password,
        }),
      }
    );
    const data = await res.json();
    console.log(data.error);

    if (data.message) {
      return (this.state.error = "Invalid ID or Password");
    } else if (data.error) {
      return (this.state.error = "Invalid ID or Password");
    } else {
      window.location = "/";
    }

    if (data._id) {
      return this.state.success === true;
    } else {
      return;
    }
  };

  render() {
    return (
      <>
        <Header success={this.state.success} name={this.state.name} />
        <h1 id="log-reg-h1">Sign in</h1>
        <form onSubmit={this.postUser} id="form">
          <div className="field">
            <label className="label">ID</label>
            <label style={{ color: "red" }}>{this.state.error}</label>
            <div className="control has-icons-left">
              <input
                placeholder="Id"
                className="input"
                type="text"
                name="id"
                id="id"
                value={this.state.id}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="buttons">
            <LoginButton />
            <CancelButton />
          </div>
        </form>
      </>
    );
  }
}

export default Login;
