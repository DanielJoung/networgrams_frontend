import React from "react";
import "bulma/css/bulma.min.css";

function Header() {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            Networgram
          </a>
        </div>

        <div className="buttons">
          <a className="button is-primary" href="/user/register">
            Register
          </a>
          <a className="button is-warning" href="/user/signin">
            Sign In
          </a>
          <a className="button is-danger" href="/post">
            Post
          </a>
        </div>
      </nav>
    </>
  );
}

export default Header;
