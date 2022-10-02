import React, { Component } from "react";

class PostShowPage extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
    };
  }
  getPost = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/networgram/post/:id`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // res.then((res) => res.json).then((resJson) => {});
    const data = await res.json();
    if (data.message) {
      window.location.href = `/post/${data.post._id}`;
    }

    // console.log(this.state.success, "success");
  };

  render() {
    return <button onClick={this.getPost}>Title: aa</button>;
  }
}

export default PostShowPage;
