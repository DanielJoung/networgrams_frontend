import React, { Component } from "react";
import "bulma/css/bulma.min.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id: "",
      password: "",
    };
  }

  getUser = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/networgram/user/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.state.name,
          id: this.state.id,
          password: this.state.password,
        }),
      }
    );
    const data = await res.json();
    if (data.message) {
      alert(`${data.message}`);
    } else {
      window.location = "/user/signin";
    }
    console.log(data);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleCancel = (e) => {
    e.preventDefault();
    window.location = "/";
  };

  render() {
    // console.log(this.state);

    return (
      <>
        <h1>Register</h1>
        <form onSubmit={this.getUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="Username"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <span className="icon is-left">
                <i className="rbc-icon github"></i>
              </span>
            </div>
          </div>
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
              <span className="icon is-left">
                <i className="rbc-icon github"></i>
              </span>
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
              <span className="icon is-left">
                <i className="rbc-icon lock"></i>
              </span>
            </div>
          </div>
          <div className="buttons">
            <button className="is-primary is-rounded button" tabindex="0">
              Register
            </button>
            <button
              className="is-danger is-rounded button"
              tabindex="0"
              onClick={this.handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default Register;
