
import React, {Component} from 'react'
import CommentList from './CommentList';
import WritePost from './WritePost';
import CreateComment from './CreateComment'

let baseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = process.env.REACT_APP_BACKEND_URL;
}

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      comment:[]
    };
  }

  componentDidMount() {
    this.getPost();
    this.getComment();
  }

  getPost = () => {
    fetch(baseURL + "/networgram/post")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        console.log("post data", data);
        this.setState({ post: data.post });
      });
  };

  getComment = () => {
    fetch(baseURL + '/networgram/post/:id/comment')
    .then(res => {
      if(res.status === 200) {
        return res.json()
      } else {
        return []
      }
    }).then(data => {
      console.log('comment data', data)
      this.setState({comment: data.comment})
    })
  }

  handleAddPost = (post) => {
    const copyPost = [...this.state.post];
    copyPost.unshift(post);
    this.setState({
      post: copyPost,
      name: '',
      content: ''
    })
  }

  handleAddComment = (comment) => {
    const copyComment = [...this.state.comment];
    copyComment.unshift(comment);
    this.setState({
      comment: copyComment,
      name: '',
      content: ''
    })
  }

  handleAddLike = (post) => {
    fetch(baseURL + "/networgram/post/" + post._id, {
      method: "PUT",
      body: JSON.stringify({ like: post.like + 1 }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        const copyPost = [...this.state.post];
        const findIndex = this.state.post.findIndex(
          (post) => post._id === resJson._id
        );
        copyPost[findIndex].like = resJson.like;
        this.setState({ post: copyPost });
      });
  };

  deletePost = (id) => {
    fetch(baseURL + '/networgram/post/' + id, {
      method: 'DELETE'
    }).then (response => {
      const findIndex = this.state.post.findIndex(post => post._id === id)
      const copyPost = [...this.state.post]
     alert('Are you sure to delete the post?')
     copyPost.splice(findIndex, 1)
     this.setState({post:copyPost})
    })
  }

  deleteComment = (id) => {
    fetch(baseURL + '/networgram/post/id/comment' + id, {
      method: 'DELETE'
    }).then (response => {
      const findIndex = this.state.comment.findIndex(comment => comment._id === id)
      const copyComment = [...this.state.comment]
     alert('Are you sure to delete the comment?')
     copyComment.splice(findIndex, 1)
     this.setState({comment:copyComment})
    })
  }


  render() {
    return (
     <> 
      <h1>Post</h1>
        <div >
          {this.state.post.map((post, index) =>{
            return(
              <div className='post' key={post._id}>
                <p >{post.name}</p>
                <p >{post.content}</p>
                <p
                onClick={()=>{
                this.handleAddLike(post)
                }}>
                ❤️ {post.like}
                </p>
              <div className='comment'>
                {this.state.comment.map((comment,index)=>{
                  {console.log('comment', comment.content)}
                    return(
                     
                      <div >
                        <CommentList key={comment._id} name={comment.name} comment={comment.content}/>
                        <button onClick={()=>this.deleteComment(comment._id)}>❌</button>
                      </div>
                    )
                  })}
                  <CreateComment handleAddComment={this.handleAddComment}/>
              </div>
                
                <button onClick={()=>this.editPost(post._id)}>Eidt the Post</button>
                <button onClick={()=>this.deletePost(post._id)}>Delete the Post</button>
            
              </div>
            )}
          )}
        </div>
        <WritePost  handleAddPost={this.handleAddPost}/>
    </>
 )} 
}

export default PostDetail;
