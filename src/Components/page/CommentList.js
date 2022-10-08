import React, { Component } from "react";

class CommentList extends Component {
  constructor() {
    super();
    this.state = {
      comment: [],
    };
  }

  componentDidMount() {
    this.getComment();
  }

  getComment = () => {
    fetch(
      process.env.REACT_APP_BACKEND_URL +
        "/networgram/post" +
        this.props.currentPostId
    )
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({ post: data.post });
      });
  };

  deleteComment = (id) => {
    fetch(process.env.REACT_APP_BACKEND_URL + "/networgram/post/:id/comment", {
      method: "DELETE",
    }).then((response) => {
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
            <div id="comment-box" key={comment._id}>
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
