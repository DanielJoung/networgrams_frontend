import React, {Component} from 'react'

class WritePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    handleChange = (event) => {
        this.setState({
                name: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:3003/networgram/post', {
          method: 'POST',
          body: JSON.stringify({name: this.state.name}),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then (res => res.json())
          .then (resJson => {
            console.log('NewForm - resJson', resJson)
            this.props.handleAddPost(resJson)
            this.setState({
                    name: ''
                // {content: ''}
            })
        }).catch (error => console.error({'Error': error}))
      }

    render() {
        return(
            <>
                <h1>NewPost</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <p><input 
                        type="text" 
                        id="name" 
                        name="name" 
                        onChange={this.handleChange}
                        value={this.state.name}
                        placeholder="add your name"/></p>
                    {/* <label htmlFor="content">content: </label>
                    <p><textarea
                        type="text" 
                        id="name" 
                        name="name" 
                        onChange={this.handleChange}
                        value={this.state.content}
                        placeholder="add a post">
                    </textarea></p> */}
                    <input type="submit" value="Post" />
                 </form>
            </>
        )
    }
}
    


export default WritePost