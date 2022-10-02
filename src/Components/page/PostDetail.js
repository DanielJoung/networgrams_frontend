import React, { Component } from "react";
import Header from "./Header";
import CommentList from "./CommentList";
import CreateComment from "./CreateComment";
import PostList from "./PostList";

class PostDetail extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.getPost();
  }

  getPost = (id) => {
    fetch(process.env.REACT_APP_BACKEND_URL + "/networgram/post/" + id)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        console.log("post data", data.post);
        this.setState({ post: data.post });
      });
  };

  render() {
    return (
      <>
        <Header />
        <h1>Post Details</h1>
      </>
    );
  }
}

export default PostDetail;
