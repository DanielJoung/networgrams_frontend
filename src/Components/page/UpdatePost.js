import React, { Component } from "react";
import Header from "./Header";

let baseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = process.env.REACT_APP_BACKEND_URL;
}

class UpdatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      content: this.props.content,
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
      process.env.REACT_APP_BACKEND_URL +
        "/networgram/post/" +
        localStorage.getItem("post_id"),
      {
        method: "PUT",
        body: JSON.stringify({
          name: localStorage.getItem('id'),
          title: this.state.title,
          content: this.state.content,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((resJson) => {
        console.log("NewForm - resJson", resJson);
        this.setState({
          name: "",
          title: resJson,
          content: "",
        });
      })
      .catch((error) => console.error({ Error: error }));
  };

  handleClick = () => {
    window.location = "/";
  };

  render() {
    return (
      <>
        <Header />
        <h1 id="log-reg-h1">Edit Page</h1>
        <form onSubmit={this.handleSubmit}>
          <div >
            <input
              className="input is-info"
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
              className="textarea"
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
           onClick={this.handleClick}
            className="button is-small  is-success"
            type="submit"
            value="Submit"
          ></input>
        </form>
      </>
    );
  }
}

export default UpdatePost;
