import React, {Component} from 'react'

class CommentList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
      return(
          <div >
            <p>➡️{this.props.comment}</p>
          </div>
    )}
}

export default CommentList