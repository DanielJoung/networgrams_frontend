import React, {Component} from 'react'

let baseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = process.env.REACT_APP_BACKEND_URL;
}

class CommentList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: []
        }
    }

    render() {
        return(
            <div>
              {this.state.comment.map((comment, index) => {
                  return(
                      <div>
                          <p>Comment</p>
                          <p key={comment._id}>{comment.name}</p>
                          <p>{comment.content}</p>
                      </div>
                  )}
                )}
              </div>
            
    )}
}

export default CommentList