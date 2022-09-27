import React, { Component } from "react";
import CommentListItem from "../list/CommentListItem";

class NewPost extends Component {
  render() {
    let comments = this.props.comments.map((comment, index) => (
      <CommentListItem message={comment} key={index} />
    ));
    return (
      <div>
        <h1>Title: {this.props.title}</h1>
        <p>Author: {this.props.author}</p>
        <div>
          <p>Body: {this.props.body}</p>
        </div>
        <h3>Comments: </h3>
        {comments}
      </div>
    );
  }
}

export default NewPost;
