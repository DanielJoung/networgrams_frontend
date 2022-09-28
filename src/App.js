import React, {Component} from "react";
import "./App.css";
import PostDetail from "./Components/page/PostDetail";
import WritePost from "./Components/page/WritePost";


class App extends Component {

  render() {
    return(
      <>
         <PostDetail />
         <WritePost 
        //  handleAddPost={this.handleAddPost}
         />
      </>
   
    )
  }
}


export default App;
