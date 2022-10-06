import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
// import CommentList from './CommentList';
import WritePost from "./WritePost";
import Header from "./Header";
// import PostDetail from "./PostDetail";
import UpdatePost from "./UpdatePost";
import DeletePost from "./DeletePost";
import EditPage from "../ui/EditPage";
import CancelButton from "../ui/CancelButton";

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
    fetch(process.env.REACT_APP_BACKEND_URL + "/networgram/post")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        console.log("post data", data.post);
        // console.log(data.post.name);
        this.setState({ post: data.post });
      });
  };

  handleAddPost = (post) => {
    const copyPost = [...this.state.post];
    copyPost.unshift(post);
    this.setState({
      post: copyPost,
      title: "",
    });
  };

  handleMovePage = (id) => {
    // console.log(this.state.post);
    localStorage.setItem("post_id", id);
    window.location = `/post/${id}`;
  };

  deletePost = (id) => {
    fetch(process.env.REACT_APP_BACKEND_URL + "/networgram/post/" + id, {
      method: "DELETE",
    }).then((response) => {
      const findIndex = this.state.post.findIndex((post) => post._id === id);
      const copyPost = [...this.state.post];
      copyPost.splice(findIndex, 1);
      this.setState({ post: copyPost });
    });
  };

  render() {
    return (
      <>
        {/* <Header /> */}
        <div className="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
          {this.state.post.map((post, index) => {
            return (
              <div className="message is-info column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"  key={post._id}>
                <p className="message-header">{post.name}</p>

                <p className="m-3">
                  <a onClick={() => this.handleMovePage(post._id)}>
                    {post.title}
                  </a>
                </p>
                <div className="buttons">
                  <EditPage />
                  <DeletePost deletePost={this.deletePost} postId={post._id} />
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default PostList;
