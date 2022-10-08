import React, { Component } from "react";
import Header from "./Header";
import WithRouter from "./WithRouter";

class WritePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      title: "",
      content: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    // console.log(event, "event");
    event.preventDefault();
    fetch("http://localhost:3003/networgram/post", {
      method: "POST",
      body: JSON.stringify({
        name: localStorage.getItem("id"),
        title: this.state.title,
        content: this.state.content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        this.props.createPost(resJson);
        this.setState({
          name: "",
          title: "",
          content: "",
        });
        this.props.navigate("/");
      })
      .catch((error) => console.error({ Error: error }));
  };

  render() {
    return (
      <>
        <Header />
        <h1 id="form-h1">New Post</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              className="input is-info"
              type="text"
              id="title"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
              placeholder="Add a title"
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
              placeholder="Add a post"
              required
            ></textarea>
          </div>

          <input id="form-submit" type="submit" />
        </form>
      </>
    );
  }
}

export default WithRouter(WritePost);
