import React from "react";
import WithRouter from "../page/WithRouter";

function EditPage(props) {
  const handleEdit = () => {
    console.log(props.post);
    // window.location = `/post/edit/${localStorage.getItem("post_id")}`;
    props.setPostId(props.post._id);
    props.navigate("/post/edit/" + props.post._id);
  };
  return (
    <button className="button is-small" onClick={() => handleEdit()}>
      Edit
    </button>
  );
}

export default WithRouter(EditPage); 
