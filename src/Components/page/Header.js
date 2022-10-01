import React from "react";
import RegisterPage from "../ui/RegisterPage";
import LoginPage from "../ui/LoginPage";
import LogoutButton from "../ui/LogoutButton";

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
              <RegisterPage />
              <LoginPage />
              <LogoutButton />
              <a className="button is-danger" href="/post">
                Post
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
