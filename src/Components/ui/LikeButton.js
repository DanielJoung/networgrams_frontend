import React, {Component} from "react";

class LikeButton extends Component {
    constructor(props){
		super(props)
			this.state = {
				post: []
			}
	}

    handleAddLike = (post) => {
        fetch(process.env.REACT_APP_BACKEND_URL +
      "/networgram/post/" + 
      localStorage.getItem("post_id"), {
            method: 'PUT',
            body: JSON.stringify({like: + post.like + 1}),
            headers: {
                'Content-Type' : 'application/json'
            }
        }) .then(res => res.json())
        .then(resJson => {
            console.log('resJson', resJson)
            const copyPost = [...this.state.post]
            const findIndex = this.state.post.findIndex(post => post._id === resJson._id)
            copyPost[findIndex].like = resJson.like
            this.setState({post: copyPost})
        })
    }

    render() {
        return(
            <>
                <button 
                // onClick={()=>{
                // this.handleAddLike(post._id)
                // }}
                >
                ❤️</button>
                {/* <p>{this.state.post.like}</p> */}
            </>

        )
    }
}

export default LikeButton