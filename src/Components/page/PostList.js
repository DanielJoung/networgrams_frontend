import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import WritePost from "./WritePost";
import Header from "./Header";
import UpdatePost from "./UpdatePost";
import DeletePost from "./DeletePost";
import EditPage from "../ui/EditPage";
import WithRouter from "./WithRouter";
// import defaultPic from ".../public/image/defaultPic.pnc"

let baseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = process.env.REACT_APP_BACKEND_URL;
}

class PostList extends Component {
  constructor(props) {
    super(props);
  }

  handleMovePage = (id) => {
    this.props.setPostId(id);
    this.props.navigate(`/post/${id}`);
  };

  render() {
    return (
      <>
        <div>
          {this.props?.posts?.map((post, index) => {
            return (
              <section className="post-list">
                <div className="post-box" key={post._id}>
                  <p id="name-p">{post.name}</p>
                  <img
                    src="https://i.imgur.com/0dqdq3m.jpeg"
                    alt="default pic"
                    width="400"
                  />
                  <p>{post.date}</p>

                  <a
                    className="title-tag"
                    onClick={() => this.handleMovePage(post._id)}
                  >
                    <p id="title-p">{post.title}</p>

                    {/* <Header /> */}
                  </a>
                  {localStorage.getItem("id") !== post.name ? (
                    ""
                  ) : (
                    <EditPage post={post} setPostId={this.props.setPostId} />
                  )}
                  {localStorage.getItem("id") !== post.name ? (
                    ""
                  ) : (
                    <DeletePost
                      deletePost={this.props.deletePost}
                      postId={post._id}
                    />
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </>
    );
  }
}

export default WithRouter(PostList);
