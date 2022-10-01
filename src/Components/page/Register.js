import React, { Component } from "react";
import RegisterButton from "../ui/RegisterButton";
import CancelButton from "../ui/CancelButton";
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
    } else if (
      this.state.name === "" ||
      this.state.id === "" ||
      this.state.password === ""
    ) {
      alert("Fill out empty space");
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

  render() {
    // console.log(this.state);

    return (
      <>
        <h1 id="log-reg-h1">Register</h1>
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

export default Register;
