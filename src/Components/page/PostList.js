import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
// import CommentList from './CommentList';
import WritePost from "./WritePost";
import Header from "./Header";
// import PostDetail from "./PostDetail";
import UpdatePost from "./UpdatePost";
import DeletePost from "./DeletePost";
import EditPage from "../ui/EditPage";

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
        <div>
          {this.state.post.map((post, index) => {
            return (
              <div key={post._id}>
                <p className="name">{localStorage.getItem("name")}</p>

                <p class="box">
                  <a onClick={() => this.handleMovePage(post._id)}>
                    {post.title}
                  </a>
                </p>
                {/* <UpdatePost handleAddPost={this.handleAddPost} /> */}
                <EditPage />
                <DeletePost deletePost={this.deletePost} postId={post._id} />
              </div>
            );
          })}
        </div>
        {/* <button>Write a new post</button> */}
        {/* <WritePost handleAddPost={this.handleAddPost} /> */}
      </>
    );
  }
}

export default PostList;
