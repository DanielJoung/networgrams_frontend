import React, { Component } from "react";
import Header from "./Header";
import WithRouter from "./WithRouter";

class UpdatePost extends Component {
  constructor(props) {
    super(props);
    const post = this.props.posts.find((post) => {
      return post._id === this.props.currentPostId;
    });
    console.log(post);
    this.state = {
      title: post.title,
      content: post.content,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name: localStorage.getItem("id"),
      title: this.state.title,
      content: this.state.content,
    };
    this.props.updatePost(body);
    this.props.navigate("/");
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  render() {
    return (
      <>
        <Header />
        <h1 id="form-h1">Edit Page</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              id="title"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
              placeholder="Edit a title"
              required
            />
          </div>
          <div>
            <textarea
              type="text"
              id="content"
              name="content"
              rows="10"
              onChange={this.handleChange}
              value={this.state.content}
              placeholder="Edit a post"
              required
            ></textarea>
          </div>
          <input
            id="form-submit"
            onClick={this.handleClick}
            type="submit"
            value="Edit"
          ></input>
        </form>
      </>
    );
  }
}
export default WithRouter(UpdatePost);
