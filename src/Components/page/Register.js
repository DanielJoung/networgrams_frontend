import React, { Component } from "react";
import "bulma/css/bulma.min.css";
import { Form, Button, Icon } from "react-bulma-components";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleButton = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/networgram/user/register`, {
        name: this.state.name,
        id: this.state.id,
        password: this.state.password,
      })
      .then((res) => console.log(res.data));

    this.setState({
      name: "",
      id: "",
      password: "",
    });

    // window.location = "/";
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
        <Form.Field>
          <Form.Label>Name</Form.Label>
          <Form.Control>
            <Form.Input
              placeholder="Username"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <Icon align="left"></Icon>
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label>ID</Form.Label>
          <Form.Control>
            <Form.Input
              placeholder="ID"
              name="id"
              id="id"
              value={this.state.id}
              onChange={this.handleChange}
            />
            <Icon align="left"></Icon>
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label>Password</Form.Label>
          <Form.Control>
            <Form.Input
              placeholder="Password"
              name="password"
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <Icon align="left">
              <i className="github" />
            </Icon>
          </Form.Control>
        </Form.Field>
        <Form.Field kind="group">
          <Form.Control>
            <Button color="link" onClick={this.handleButton}>
              Submit
            </Button>
          </Form.Control>
          <Form.Control>
            <Button
              color="link"
              colorVariant="light"
              onClick={this.handleCancel}
            >
              Cancel
            </Button>
          </Form.Control>
        </Form.Field>
      </>
    );
  }
}

export default Register;
