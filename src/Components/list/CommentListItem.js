import React, {Component} from 'react'

class CommentListItem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.message}</p>
            </div>
        )
    }
}

export default CommentListItem