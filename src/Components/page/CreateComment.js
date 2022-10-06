import React, { Component } from "react";

class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      `http://localhost:3003/networgram/post/${localStorage.getItem(
        "post_id"
      )}/comment`,
      {
        method: "POST",
        body: JSON.stringify({
          post: this.props.post,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((resJson) => {
        console.log("NewForm - resJson", resJson);
        // this.state.handleAddComment(resJson);
        this.setState({
          post: [],
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
              type="text"
              id="name"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              placeholder="name"
            />
          </div>

          <div>
            <input
              type="text"
              id="content"
              name="content"
              onChange={this.handleChange}
              value={this.state.content}
              placeholder="comment"
            ></input>
          </div>

          <input type="submit" value="Add a comment" />
        </form>
      </>
    );
  }
}

export default CreateComment;
