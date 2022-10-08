import React, { Component } from "react";

class DeletePost extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <button
          id="delete-btn"
          onClick={() => this.props.deletePost(this.props.postId)}
        >
          Delete
        </button>
      </>
    );
  }
}

export default DeletePost;
