import React, { Component } from "react";
import CreateComment from "./CreateComment";

class CommentList extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
      comment: [],
    };
  }

  componentDidMount() {
    this.getComment();
  }

  getComment = () => {
  };

  deleteComment = (id) => {
    fetch(
      process.env.REACT_APP_BACKEND_URL + "/networgram/post/:id/comment" + id,
      {
        method: "DELETE",
      }
    ).then((response) => {
      const findIndex = this.state.comment.findIndex(
        (comment) => comment._id === id
      );
      const copyComment = [...this.state.comment];
      copyComment.splice(findIndex, 1);
      this.setState({ comment: copyComment });
    });
  };

  render() {
    return (
      <div>
        {this.state.comment.map((comment, index) => {
          return (
            <div  id="comment-box" key={comment._id}>
              <p>
                {comment.name}: {comment.content}
              </p>
              <button
                className="button is-small is-danger"
                onClick={() => this.deleteComment(comment._id)}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CommentList;
