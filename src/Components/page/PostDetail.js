import React, { Component } from "react";
import Header from "./Header";
import CommentList from "./CommentList";
import CreateComment from "./CreateComment";
import PostList from "./PostList";

class PostDetail extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
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
        // console.log("post data", data.showPost);
        this.setState({
          post: data.showPost,
        });
        // console.log("statePost", this.state.post);
      });
  };

  handleAddLike = () => {
    fetch(
      process.env.REACT_APP_BACKEND_URL +
        "/networgram/post/" +
        localStorage.getItem("post_id"),
      {
        method: "PUT",
        body: JSON.stringify({ like: +this.state.post.like + 1 }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((resJson) => {
        console.log("resJson", resJson);
        const copyPost = this.state.post;
        copyPost.like = resJson.like;
        this.setState({ post: copyPost });
        // console.log("addlikePost", this.state.post);
      });
  };

  render() {
    return (
      <>
        {/* <Header /> */}
        <h1>Post Detail</h1>

        <p className="box">{this.state.post.content}</p>
        <button
          onClick={() => {
            this.handleAddLike();
          }}
        >
          ❤️
        </button>
        <p>{this.state.post.like}</p>
        <CommentList />

      </>
    );
  }
}

export default PostDetail;
