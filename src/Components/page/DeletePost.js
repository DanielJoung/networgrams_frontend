import React, { Component } from "react";

let baseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = process.env.REACT_APP_BACKEND_URL;
}

class DeletePost extends Component {
    constructor(props) {
      super(props);
    }

    render() {
            return (
            <>
                <button
                    className="button is-small is-danger"
                    onClick={() => this.props.deletePost(this.props.postId)}
                    >
                    Delete
                </button>
            </>
    )}
}

export default DeletePost