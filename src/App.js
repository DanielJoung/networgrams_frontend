import React from "react";
// import { useState } from "react";
// import "bulma/css/bulma.min.css";
import "./App.css";
// import Header from "./Components/page/Header";
// import PostList from "./Components/page/PostList";
import PostDetail from "./Components/page/PostDetail";
// import WritePost from "./Components/page/WritePost";
// import RegisterButton from "./Components/ui/RegisterButton";
// import LoginButton from "./Components/ui/LoginButton";


function App() {
  return(
    <>
       <PostDetail />
    </>
 
  )
}


// function App() {
//   const [mode, setMode] = useState("WELCOME");
//   const [id, setId] = useState(null);
//   const [nextId, setNextId] = useState(4);

//   const [posts, setPosts] = useState([
//     { id: 1, title: "My First Post", body: "This is my first post." },
//     { id: 2, title: "My Second Post", body: "This is my second post." },
//     { id: 3, title: "My Third Post", body: "This is my third post." },
//   ]);

//   let content = null;
//   if (mode === "WELCOME") {
//     content = <PostDetail title="Welcome" body="WELCOME, HOME"></PostDetail>;
//   } else if (mode === "READ") {
//     let title,
//       body = null;
//     for (let i = 0; i < posts.length; i++) {
//       if (posts[i].id === id) {
//         title = posts[i].title;
//         body = posts[i].body;
//       }
//     }
//     content = <PostDetail title={title} body={body}></PostDetail>;
//   } else if (mode === "CREATE") {
//     content = (
//       <WritePost
//         onCreate={(_title, _body) => {
//           const newPost = { id: nextId, title: _title, body: _body };
//           const newPosts = [...posts];
//           newPosts.push(newPost);
//           setPosts(newPosts);
//           setMode("READ");
//           setId(nextId);
//           setNextId(nextId + 1);
//         }}
//       ></WritePost>
//     );
//   }

//   return (
//     <>
//       <RegisterButton />
//       <LoginButton />
//       <Header
//         title="MyPost"
//         onChangeMode={() => {
//           setMode("WELCOME");
//         }}
//       ></Header>
//       <PostList
//         posts={posts}
//         onChangeMode={(_id) => {
//           setMode("READ");
//           setId(_id);
//         }}
//       ></PostList>
//       {content}

//       <a
//         href="/create"
//         onClick={(event) => {
//           event.preventDefault();
//           setMode("CREATE");
//         }}
//       >
//         Write a post
//       </a>
//     </>
//   );
// }

export default App;
