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
          title: this.props.title,
          content: this.props.content
      }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]:event.target.id
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const post = this.state
    }

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
                  placeholder="Edit a post"
                  required
                ></textarea>
              </div>
    
              <input class="button is-success" type="submit" value="Edit"></input>
            </form>
          </>
        );
      }
}

export default UpdatePost