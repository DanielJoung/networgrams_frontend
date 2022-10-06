import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostList from "./Components/page/PostList";
import PostDetail from "./Components/page/PostDetail";
import Header from "./Components/page/Header";
import Register from "./Components/page/Register";
import Login from "./Components/page/Login";
import "./App.css";
// import EditPage from "./Components/ui/EditPage";
import UpdatePost from "./Components/page/UpdatePost";
import WritePost from "./Components/page/WritePost";

const post_id = localStorage.getItem("post_id");
class App extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
      currentPostId: "",
    };
    // this.setPostId = this.setPostId.bind(this);
  }
  componentDidMount() {
    this.getPost();
  }

  setPostId = (id) => {
    console.log(id);
    this.setState(
      {
        // ...this.state,
        currentPostId: id,
      },
      () => {
        console.log(this.state.currentPostId, "main");
        // window.location = ;
      }
    );
  };

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
        console.log("post data", data);
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
      // date: "",
    });
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

  createPost = (post) => {
    const posts = [...this.state.post, post];
    this.setState({
      post: posts,
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
        console.log("NewForm - resJson", resJson);
        this.getPost();
      })
      .catch((error) => console.error({ Error: error }));
  };

  // getPost = () => {
  //   // e.preventDefault();
  //   fetch(process.env.REACT_APP_BACKEND_URL + "/networgram/post")
  //     .then((res) => {
  //       if (res.status === 200) {
  //         return res.json();
  //       } else {
  //         return [];
  //       }
  //     })
  //     .then((data) => {
  //       console.log("post data", data);
  //       // console.log(data.post.name);
  //       this.setState({ post: data.post });
  //     });
  // };

  render() {
    console.log(this.state, "render");
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
                    ""
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
                <PostDetail
                  currentPostId={this.state.currentPostId}
                  posts={this.state.post}
                />
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
