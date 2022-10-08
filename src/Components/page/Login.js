import React, { Component } from "react";
import LoginButton from "../ui/LoginButton";
import Header from "./Header";
import WithRouter from "./WithRouter";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      password: "",
      error: "",
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
    // console.log(data);

    if (data.message || data.error) {
      return this.setState({
        error: "Invalid ID or Password",
      });
    } else {
      localStorage.setItem("id", data.foundUser.id);
      localStorage.setItem("name", data.foundUser.name);
      localStorage.setItem("password", data.foundUser.password);
      localStorage.setItem("user_id", data.foundUser._id);
      this.props.getPost();
      this.props.navigate("/");
    }
  };

  render() {
    return (
      <>
        <Header id={this.state.id} />
        <h1 id="input-h1">Sign in</h1>
        <p id="reg-log-error">{this.state.error}</p>
        <form onSubmit={this.postUser} id="form">
          <label>ID: </label>
          <div id="form-div">
            <input
              placeholder="Id"
              className="id-input"
              type="text"
              name="id"
              id="id"
              value={this.state.id}
              onChange={this.handleChange}
            />
          </div>
          <label>Password: </label>
          <div id="form-div">
            <input
              className="pw-input"
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <LoginButton />
        </form>
      </>
    );
  }
}

export default WithRouter(Login);
