import React, { Component } from "react";
import Header from "./Header";
import CommentList from "./CommentList";
import CreateComment from "./CreateComment";
import PostList from "./PostList";
// import Header from "./Header";

class PostDetail extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
    };
  }

  componentDidMount() {
    this.getPost();
  }

  getPost = () => {
    // e.preventDefault();
    fetch(
      process.env.REACT_APP_BACKEND_URL +
        "/networgram/post/" +
        localStorage.getItem("post_id")
    )
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        console.log("post data", data.showPost);
        this.setState({
          content: data.showPost.content,
        });
      });
  };

  render() {
    return (
      <>
        {/* <Header /> */}
        <h1>Post Detail</h1>
        <p class="box">{this.state.content}</p>
      </>
    );
  }
}

export default PostDetail;
