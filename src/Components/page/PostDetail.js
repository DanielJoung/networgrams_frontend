import React, {Component} from 'react'


let baseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = process.env.REACT_APP_BACKEND_URL;
}

class PostDetail extends Component { 
  constructor(props){
    super(props)
      this.state = {
        post: []
      }
  }

  componentDidMount() {
    this.getPost()
  }

  getPost = () => {
  fetch(baseURL + '/networgram/post')
    .then(res => {
      if(res.status === 200) {
        return res.json()
      } else {
        return []
      }
    }).then(data => {
      console.log('data', data)
      this.setState({post: data.post})
    })
  }



  render() {
    return(
      <div>
        <h1>Post</h1>
        <table>
        <tbody>
          {this.state.post.map((post, index) => {
              return (
                <>
                  <tr key={post._id} >
                  <td>{post.name}</td>
                  <td>{post.content}</td>
                  </tr>
               </>
         
              )
            })
          }
        </tbody>
      </table>
      </div>
    )
  }

}

export default PostDetail;

