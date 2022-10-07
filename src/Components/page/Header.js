import React, { Component } from "react";
import RegisterPage from "../ui/RegisterPage";
import LoginPage from "../ui/LoginPage";
import LogoutButton from "../ui/LogoutButton";
import PostPage from "../ui/PostPage";
import Welcome from "../ui/Welcome";
import WithRouter from "./WithRouter";
// import "bulma/css/bulma.min.css";

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
        <div className="header-div">
          <div id="header-title" onClick={() => this.props.navigate("/")}>
            Networgram
          </div>
          <div id="header-link">
            {localStorage.getItem("id") ? <Welcome id={this.state.id} /> : ""}
            {localStorage.getItem("id") ? <LogoutButton /> : <RegisterPage />}
            {localStorage.getItem("id") ? "" : <LoginPage />}
          </div>
        </div>
      </>
    );
  }
}

export default WithRouter(Header);
