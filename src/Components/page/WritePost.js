import React, { Component } from "react";

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
    event.preventDefault();
    fetch("http://localhost:3003/networgram/post", {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        title: this.state.title,
        content: this.state.content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log("NewForm - resJson", resJson);
        this.props.handleAddPost(resJson);
        this.setState({
          name: "",
          title: "",
          content: "",
        });
      })
      .catch((error) => console.error({ Error: error }));
  };

  render() {
    return (
      <>
        <h1>NewPost</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              placeholder="add your name"
            />
          </div>

          <div>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
              placeholder="add a title"
            />
          </div>

          <div>
            <textarea
              type="text"
              id="content"
              name="content"
              onChange={this.handleChange}
              value={this.state.content}
              placeholder="add a post"
            ></textarea>
          </div>

          <input type="submit" value="Post" />
        </form>
      </>
    );
  }
}

export default WritePost;
