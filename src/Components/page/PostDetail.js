import React, { Component } from "react";
import Header from "./Header";
import WithRouter from "./WithRouter";

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    this.getPost();
  }

  getPost = () => {
    fetch(
      process.env.REACT_APP_BACKEND_URL +
        "/networgram/post/" +
        this.props.currentPostId
    )
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        this.setState({
          post: data.showPost,
        });
      });
  };

  handleAddLike = () => {
    fetch(
      process.env.REACT_APP_BACKEND_URL +
        "/networgram/post/" +
        this.props.currentPostId,
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
        const copyPost = this.state.post;
        copyPost.like = resJson.like;
        this.setState({ post: copyPost });
      });
  };

  editPost = (id) => {
    fetch(
      process.env.REACT_APP_BACKEND_URL +
        "/networgram/post/" +
        localStorage.getItem("post_id"),
      {
        method: "PUT",

        body: JSON.stringify({
          title: "",
          content: "",
        }),
      }
    )
      .then((res) => res.json())
      .then((resJson) => {
        const findIndex = this.state.post.findIndex((post) => post._id === id);
        const copyPost = this.state.post;
        copyPost.title = resJson.title;
        copyPost[findIndex].content = resJson.content;
        this.setState({ post: copyPost });
      });
  };

  render() {
    return (
      <>
        <Header />
        <div id="post-detail-box">
          <h1 id="post-detail-h1">On the Blog</h1>
          <p id="post-detail-p">{this.state.post.content}</p>
        </div>
        <button
          id="like-button"
          onClick={() => {
            this.handleAddLike();
          }}
        >
          ❤️
          <span id="like-num">{this.state.post.like}</span>
        </button>
      </>
    );
  }
}

export default WithRouter(PostDetail);
