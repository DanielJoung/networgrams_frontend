import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostList from "./Components/page/PostList";
import PostDetail from "./Components/page/PostDetail";
import Header from "./Components/page/Header";
import Register from "./Components/page/Register";
import Login from "./Components/page/Login";
import "./App.css";
import UpdatePost from "./Components/page/UpdatePost";
import WritePost from "./Components/page/WritePost";
// import CreateComment from "./Components/page/CreateComment";
// import CommentList from "./Components/page/CommentList";
import Swal from "sweetalert2";

class App extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
      currentPostId: "",
      comment: [],
    };
  }
  componentDidMount() {
    this.getPost();
  }

  setPostId = (id) => {
    this.setState({
      currentPostId: id,
    });
  };

  getPost = () => {
    fetch(process.env.REACT_APP_BACKEND_URL + "/networgram/post")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        console.log(data.post.comment);
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

  deletePost = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Deleted!",
          localStorage.getItem("id") + " post is deleted.",
          "success"
        );
        fetch(process.env.REACT_APP_BACKEND_URL + "/networgram/post/" + id, {
          method: "DELETE",
        }).then((response) => {
          const findIndex = this.state.post.findIndex(
            (post) => post._id === id
          );
          const copyPost = [...this.state.post];
          copyPost.splice(findIndex, 1);
          this.setState({ post: copyPost });
        });
      }
    });
  };

  createPost = (post) => {
    const posts = [...this.state.post, post];
    this.setState({
      post: posts,
    });
  };

  createComment = (comment) => {
    const comments = [...this.state.comment, comment];
    this.setState({
      comment: comments,
    });
  };

  updatePost = (body) => {
    fetch(
      process.env.REACT_APP_BACKEND_URL +
        "/networgram/post/" +
        this.state.currentPostId,
      {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((resJson) => {
        this.getPost();
      })
      .catch((error) => console.error({ Error: error }));
  };

  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Header />
                  {!localStorage.getItem("id") ? (
                    <div class="app-div">
                      <p class="app-p">Please Sign In first to see the post</p>
                    </div>
                  ) : (
                    <PostList
                      posts={this.state.post}
                      setPostId={this.setPostId}
                      handleAddPost={this.handleAddPost}
                      deletePost={this.deletePost}
                    />
                  )}
                </>
              }
            />
            <Route path="/user/register" element={<Register />} />
            <Route
              path="/user/signin"
              element={<Login getPost={this.getPost} />}
            />
            <Route
              path="/post/:id"
              element={
                <>
                  <PostDetail
                    currentPostId={this.state.currentPostId}
                    posts={this.state.post}
                  />
                  {/* <CreateComment
                    currentPostId={this.state.currentPostId}
                    posts={this.state.post}
                    createComment={this.createComment}
                  />
                  <CommentList currentPostId={this.state.currentPostId} /> */}
                </>
              }
            />
            <Route
              path="/post/edit/:id"
              element={
                <UpdatePost
                  currentPostId={this.state.currentPostId}
                  posts={this.state.post}
                  updatePost={this.updatePost}
                />
              }
            />
            <Route
              path="/post"
              element={<WritePost createPost={this.createPost} />}
            />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
