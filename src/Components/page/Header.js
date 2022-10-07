import React, { Component } from "react";
import RegisterPage from "../ui/RegisterPage";
import LoginPage from "../ui/LoginPage";
import LogoutButton from "../ui/LogoutButton";
import PostPage from "../ui/PostPage";
import Welcome from "../ui/Welcome";
import WithRouter from "./WithRouter";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      id: localStorage.getItem("id"),
    };
  }

  render() {
    return (
      <>
              <a 
              className="navbar-item"
              onClick={() => this.props.navigate("/")}
              ><p id="header-title">
                  Networgram</p>  
              </a>
                {localStorage.getItem("id") ? (
                  <Welcome id={this.state.id} />
                ) : (
                  ""
                )}
                {localStorage.getItem("id") ? (
                  <LogoutButton />
                ) : (
                  <RegisterPage />
                )}
                {localStorage.getItem("id") ? <PostPage /> : <LoginPage />}
      </>
    );
  }
}

export default WithRouter(Header);
