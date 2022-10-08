import React, { Component } from "react";
import DeletePost from "./DeletePost";
import EditPage from "../ui/EditPage";
import WithRouter from "./WithRouter";
import PostPage from "../ui/PostPage";

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
        <PostPage />
        <div>
          {this.props?.posts?.reverse().map((post, index) => {
            return (
              <section className="post-list" key={post._id}>
                <div className="post-box">
                  <div id="name-p">
                    {post.name}
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
                  <img
                    src="https://i.imgur.com/0dqdq3m.jpeg"
                    alt="default pic"
                    width="400"
                  />

                  <a
                    id="title-tag"
                    onClick={() => this.handleMovePage(post._id)}
                  >
                    <p id="title-p">{post.title}</p>
                  </a>
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
