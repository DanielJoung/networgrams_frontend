import React, { Component } from "react";
import PostDetail from "./Components/page/PostDetail";
import Register from "./Components/page/Register";
import Login from "./Components/page/Login";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        {/* <Register />
        <Login /> */}
        <PostDetail />
      </>
    );
  }
}

export default App;
