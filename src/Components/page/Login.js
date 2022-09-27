import React, { Component } from "react";
import "bulma/css/bulma.min.css";
import { Form } from "react-bulma-components";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h1>Log in/Log out</h1>
        <Form.Field>
          <Form.Label>Name</Form.Label>
          <Form.Control>
            <Form.Input
              placeholder="Username"
              name="name"
              value={form.name}
              onChange={update}
            />
            <Icon align="left">
              <i className="github" />
            </Icon>
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label>Password</Form.Label>
          <Form.Control>
            <Form.Input
              placeholder="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={update}
            />
            <Icon align="left">
              <i className="github" />
            </Icon>
          </Form.Control>
        </Form.Field>
        <Button.Group>
          <Button
            fullwidth
            rounded
            color="primary"
            onClick={() => console.log(form)}
          >
            Login
          </Button>
        </Button.Group>
      </>
    );
  }
}

export default Login;
