import React from 'react'

function PostDetail(props) {
    return (
      <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  
    )
}

export default PostDetail;

