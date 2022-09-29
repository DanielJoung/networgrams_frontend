import React, { Component } from "react";
import PostDetail from "./Components/page/PostDetail";
import Header from "./Components/page/Header";
import Register from "./Components/page/Register";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        {/* <Register /> */}
        <PostDetail />
      </>
    );
  }
}

export default App;
