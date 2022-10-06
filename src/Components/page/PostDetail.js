import React, { Component } from "react";
import Header from "./Header";
import CommentList from "./CommentList";
import WithRouter from "./WithRouter";
import CreateComment from "./CreateComment";
import PostList from "./PostList";
import UpdatePost from "./UpdatePost";

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    // console.log(this.props);
    this.getPost();
  }

  getPost = () => {
    console.log(this.props.currentPostId, "currentPostId");
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
        console.log("post data", data);
        this.setState({
          post: data.showPost,
        });
        console.log("statePost", this.state.post);
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
        // console.log("resJson", resJson);
        const copyPost = this.state.post;
        copyPost.like = resJson.like;
        this.setState({ post: copyPost });
        // console.log("addlikePost", this.state.post);
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
        console.log("copypost", copyPost);
        // console.log('title', title)
        // console.log('content', content)
        this.setState({ post: copyPost });
      });
  };

  render() {
    // console.log(this.props.currentPostId, "currentPostId");
    return (
      <>
        <Header />
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

        {/* <UpdatePost editPost={this.editPost} /> */}
        <CommentList post={this.state.post} />
      </>
    );
  }
}

export default WithRouter(PostDetail);
