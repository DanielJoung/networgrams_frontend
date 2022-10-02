import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostList from "./Components/page/PostList";
import PostDetail from "./Components/page/PostDetail";
import Header from "./Components/page/Header";
import Register from "./Components/page/Register";
import Login from "./Components/page/Login";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/user/register" element={<Register />} />
            <Route path="/user/signin" element={<Login />} />
            <Route path="/post" element={<PostList />} />
            <Route path="/post/:id" element={<PostDetail />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
