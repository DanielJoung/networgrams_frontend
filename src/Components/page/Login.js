import React, { Component } from "react";
import LoginButton from "../ui/LoginButton";
import CancelButton from "../ui/CancelButton";
import "bulma/css/bulma.min.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      password: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  getUser = async (e) => {
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
    if (data.message) {
      alert(`${data.message}`);
    } else if (data.error) {
      alert(`${data.error}`);
    } else {
      window.location = "/";
    }

    console.log(data, "data");
  };

  render() {
    return (
      <>
        <h1 id="log-reg-h1">Sign in</h1>
        <form onSubmit={this.getUser} id="form">
          <div className="field">
            <label className="label">ID</label>
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
