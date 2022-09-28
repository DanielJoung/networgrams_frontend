import React, {Component} from "react";
import "./App.css";
import PostDetail from "./Components/page/PostDetail";
import Header from "./Components/page/Header";




class App extends Component {
  render() {
    return(
      <>
        <Header />
        <PostDetail />
      </>
   
    )
  }
}


export default App;
