import React, { Component } from "react";
import "bulma/css/bulma.min.css";
import { Form, Button, Icon } from "react-bulma-components";
import axios from "axios";

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

  handleButton = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/networgram/user/signin`, {
        id: this.state.id,
        password: this.state.password,
      })
      .then((res) => console.log(res.data));

    this.setState({
      id: "",
      password: "",
    });
  };
  render() {
    return (
      <>
        <h1>Log in</h1>
        <Form.Field>
          <Form.Label>ID</Form.Label>
          <Form.Control>
            <Form.Input
              placeholder="ID"
              name="id"
              id="id"
              required
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
              required
              value={this.state.password}
              onChange={this.handleChange}
            />
            <Icon align="left"></Icon>
          </Form.Control>
        </Form.Field>
        <Button.Group>
          <Button fullwidth rounded color="primary" onClick={this.handleButton}>
            Log In
          </Button>
        </Button.Group>
      </>
    );
  }
}

export default Login;
