import React, {Component} from 'react'

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
    // e.preventDefault();
    fetch(
      process.env.REACT_APP_BACKEND_URL +
        "/networgram/post/" +
        localStorage.getItem("post_id") + "/comment"
        )
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else {
            return [];
          }
        })
        .then((data) => {
          console.log("comment data", data.comment);
          this.setState({ comment: data.comment });
        });
    };


    render() {
      return(
        <div>
        {this.state.comment.map((comment, index) => {
          return (
            <div key={comment._id}>
              <p>{comment.name}: {comment.content}</p>
            </div>
          )}
        )}
      </div>
    )}
  
}

export default CommentList