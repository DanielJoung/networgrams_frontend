import React, { Component } from "react";
import LoginButton from "../ui/LoginButton";
import CancelButton from "../ui/CancelButton";
import "bulma/css/bulma.min.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id: "",
      password: "",
      success: false,
      jsonData: [],
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
    // res.then((res) => res.json).then((resJson) => {});
    const data = await res.json();
    if (data.message) {
      alert(`${data.message}`);
      this.state.success = false;
    } else if (data.error) {
      alert(`${data.error}`);
      this.state.success = false;
    } else {
      this.state.success = true;
      // return <p>{this.state.name}</p>;
      // window.location = "/";
    }

    this.state.jsonData.push(data);
    this.setState({
      name: "",
      id: "",
      password: "",
      // jsonData: [],
      success: false,
    });
    console.log(this.state.jsonData);
    // console.log(this.state.success, "success");
  };

  render() {
    return (
      <>
        <p>{this.state.jsonData.name}</p>
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
