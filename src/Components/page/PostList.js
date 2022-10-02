import React, { Component } from "react";
// import CommentList from './CommentList';
import WritePost from "./WritePost";
import Header from "./Header";
// import CreateComment from './CreateComment'

import PostShowPage from "../ui/PostShowPage";

let baseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = process.env.REACT_APP_BACKEND_URL;
}

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
    };
  }

  componentDidMount() {
    this.getPost();
  }

  getPost = () => {
    // e.preventDefault();
    fetch(baseURL + "/networgram/post")
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

  handleAddPost = (post) => {
    const copyPost = [...this.state.post];
    copyPost.unshift(post);
    this.setState({
      post: copyPost,
      name: "",
      title: "",
    });
  };

  handleMovePage = (id) => {
    // console.log(this.state.post);
    window.location = `/post/${id}`;
  };

  render() {
    return (
      <>
        <Header />
        <h1>Post</h1>
        <div>
          {this.state.post.map((post, index) => {
            return (
              <div key={post._id}>
                <p>Name: {post.name}</p>
                <p>
                  <a onClick={() => this.handleMovePage(post._id)}>
                    Title: {post.title}
                  </a>
                </p>
              </div>
            );
          })}
        </div>
        <button>Write a new post</button>
        <WritePost handleAddPost={this.handleAddPost} />
      </>
    );
  }
}

export default PostList;
