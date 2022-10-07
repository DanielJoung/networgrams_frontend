import React, { Component } from "react";
import RegisterButton from "../ui/RegisterButton";
import CancelButton from "../ui/CancelButton";
import Header from "./Header";
// import "bulma/css/bulma.min.css";
import WithRouter from "./WithRouter";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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
    if (
      data.message ||
      this.state.name === "" ||
      this.state.id === "" ||
      this.state.password === ""
    ) {
      return this.setState({ error: "ID is already taken" });
    } else {
      // window.location = "/user/signin";
      this.props.navigate("/user/signin");
    }

    // console.log(data);
  };

  render() {
    // console.log(this);
    return (
      <>
        <Header />
        <h1 id="log-reg-h1">Register</h1>
        <p id="reg-log-error">{this.state.error}</p>
        <form onSubmit={this.getUser} id="form">
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
            <RegisterButton />
            <CancelButton />
          </div>
        </form>
      </>
    );
  }
}

export default WithRouter(Register);
