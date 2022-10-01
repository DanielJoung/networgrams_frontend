import React from "react";
import RegisterPage from "../ui/RegisterPage";
import LoginPage from "../ui/LoginPage";
import LogoutButton from "../ui/LogoutButton";
import PostPage from "../ui/PostPage";
import Welcome from "../ui/Welcome";

function Header(props) {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/" id="header-title">
            Networgram
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Welcome />
              <RegisterPage />
              <LoginPage />
              <LogoutButton />
              <PostPage />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
