import React, { Component } from "react";
import RegisterButton from "../ui/RegisterButton";
import Header from "./Header";
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
        <h1 id="input-h1">Register</h1>
        <p id="reg-log-error">{this.state.error}</p>
        <form onSubmit={this.getUser} id="form">
        
            <label>Name: </label>
            <div>
              <input
                className="id-input"
                type="text"
                placeholder="Username"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <label >ID: </label>
            <div>
              <input
                className="id-input"
                placeholder="Id"
                type="text"
                name="id"
                id="id"
                value={this.state.id}
                onChange={this.handleChange}
              />
            </div>
            <label>Password: </label>
            <div>
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
            <RegisterButton />
        </form>
      </>
    );
  }
}

export default WithRouter(Register);
