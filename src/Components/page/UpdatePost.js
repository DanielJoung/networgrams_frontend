import React, { Component } from "react";

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
      post: [],
    };
  }

  componentDidMount() {
    this.getPost();
  }

  componentDidMount() {
    this.getPost();
  }

  getPost = () => {
    // e.preventDefault();
    fetch(
      process.env.REACT_APP_BACKEND_URL +
        `/networgram/post/${localStorage.getItem("post_id")}/edit`,
      {
        method: "GET",
        body: JSON.stringify({
          title: this.state.post.title,
          content: this.state.post.content,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        console.log("post data", data.editPost);
        // console.log(data.post.name);
        this.setState({ post: data.editPost });
      });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   const post = this.state;
  // };

  render() {
    return (
      <>
        <h1> edit page</h1>
        {/* <h1>{this.state.id}</h1> */}
        {/* <form>
          <div>
            <input
              className="input is-info"
              type="text"
              id="title"
              name="title"
              onChange={this.handleChange}
              value={this.state.post.title}
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
              value={this.state.post.content}
              placeholder="Edit a post"
              required
            ></textarea>
          </div>

          <input class="button is-success" type="submit" value="Edit"></input>
        </form> */}
      </>
    );
  }
}

export default UpdatePost;
