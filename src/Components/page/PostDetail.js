import React, { Component } from "react";
import Header from "./Header";
import CommentList from "./CommentList";
import CreateComment from "./CreateComment";
import PostList from "./PostList";
// import Header from "./Header";

class PostDetail extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <h1>Post Detail</h1>
        <div>{this.props.content}</div>
      </>
    );
  }
}

export default PostDetail;
