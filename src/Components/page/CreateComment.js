// import React, { Component } from "react";

// class CreateComment extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       comContent: "",
//       name: "",
//     };
//   }

//   handleChange = (event) => {
//     this.setState({
//       [event.target.id]: event.target.value,
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     fetch(
//       "http://localhost:3003/networgram/post/" +
//         this.props.currentPostId +
//         "/comment",
//       {
//         method: "POST",
//         body: JSON.stringify({
//           name: localStorage.getItem("id"),
//           comment: this.state.comment,
//           comContent: this.state.comContent,
//         }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     )
//       .then((res) => res.json())
//       .then((resJson) => {
//         console.log("NewForm - resJson", resJson);
//         this.props.createComment(resJson);

//         this.setState({
//           name: "",
//           comContent: "",
//         });
//       })
//       .catch((error) => console.error({ Error: error }));
//   };

//   render() {
//     console.log(this.state);
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <div>
//             <input
//               type="text"
//               id="comment-content"
//               name="content"
//               onChange={this.handleChange}
//               value={this.state.content}
//               placeholder="comment"
//             ></input>

//             <input id="comment-submit" type="submit" value="Add a comment" />
//           </div>
//         </form>
//       </>
//     );
//   }
// }

// export default CreateComment;
