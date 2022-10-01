
import React, {Component} from 'react'
// import CommentList from './CommentList';
import WritePost from './WritePost';
// import CreateComment from './CreateComment'

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
      
    };
  }

  componentDidMount() {
    this.getPost();
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

  handleAddPost = (post) => {
    const copyPost = [...this.state.post];
    copyPost.unshift(post);
    this.setState({
      post: copyPost,
      name: '',
      title:'',
    })
  }

  handleCancel = (e) => {
    e.preventDefault();
    window.location = `/post/${this.state.post._id}`;
  };

  render() {
    return (
     <> 
      <h1>Post</h1>
        <div >
          {this.state.post.map((post, index) =>{
            return(
              <div key={post._id}>
                <p >Name: {post.name}</p>
                <p><a onClick={this.handleCancel}>Title: {post.title}</a></p>
                
              </div>
            )}
          )}
        </div>
        <button>Write a new post</button>
        <WritePost  handleAddPost={this.handleAddPost}/>
    </>
 )} 
}

export default PostDetail;
