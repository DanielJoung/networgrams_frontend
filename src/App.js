import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostDetail from "./Components/page/PostDetail";
import Header from "./Components/page/Header";
import Register from "./Components/page/Register";
import Login from "./Components/page/Login";
import Header from "./Components/ui/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        {/* <Register /> */}
        <PostDetail />
        <Router>
          <Routes>
            <Route path="/user/register" element={<Register />} />
            <Route path="/user/signin" element={<Login />} />
            <Route path="/post" element={<PostDetail />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
