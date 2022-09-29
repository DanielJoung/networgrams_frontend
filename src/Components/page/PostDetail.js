import React, { Component } from "react";
import WritePost from "./WritePost";

let baseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = process.env.REACT_APP_BACKEND_URL;
}

class PostDetail extends Component {
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
    fetch(baseURL + "/networgram/post")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        console.log("data", data);
        this.setState({ post: data.post });
      });
  };

  handleAddPost = (post) => {
    const copyPost = [...this.state.post];
    copyPost.unshift(post);
    this.setState({
      post: copyPost,
      name: "",
    });
  };

  handleAddLike = (post) => {
    fetch(baseURL + "/networgram/post/" + post._id, {
      method: "PUT",
      body: JSON.stringify({ like: +post.like + 1 }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        const copyPost = [...this.state.post];
        const findIndex = this.state.post.findIndex(
          (post) => post._id === resJson._id
        );
        copyPost[findIndex].like = resJson.like;
        this.setState({ post: copyPost });
      });
  };

  render() {
    return (
      <div>
        <h1>Post</h1>
        <table>
          <tbody>
            {this.state.post.map((post, index) => {
              return (
                <>
                  <tr key={post._id}>
                    <td>{post.name}</td>
                    <td>{post.content}</td>
                    <td>{post.like}</td>
                    <td
                      onClick={() => {
                        this.handleAddLike(post);
                      }}
                    >
                      ❤️
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <WritePost handleAddPost={this.handleAddPost} />
      </div>
    );
  }
}

export default PostDetail;
