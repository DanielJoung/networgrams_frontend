import React from 'react'
import PostListItem from './PostListItem'

function PostList(props) {
    const{posts, onClickItem} = props;

    return(
     <>
     {posts.map((post,index) => {
         return(
             <PostListItem
                key={post.id}
                post={post}
                onclick={()=>{
                    onClickItem(post)}}
             />
         )
     })}
     </>
    )
}

export default PostList
