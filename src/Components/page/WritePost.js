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
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              className="input is-info"
              type="text"
              id="title"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
              placeholder="add a title"
              required
            />
          </div>

          <div>
            <textarea
              className="textarea"
              type="text"
              id="content"
              name="content"
              rows="10"
              onChange={this.handleChange}
              value={this.state.content}
              placeholder="add a post"
              required
            ></textarea>
          </div>

          <input class="button is-success" type="submit" value="Submit"></input>
        </form>
      </>
    );
  }
}

export default WritePost;
