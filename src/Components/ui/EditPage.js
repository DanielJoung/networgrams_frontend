import React from "react";
import WithRouter from "../page/WithRouter";

function EditPage(props) {
  const handleEdit = () => {
    console.log(props.post);
    props.setPostId(props.post._id);
    props.navigate("/post/edit/" + props.post._id);
  };
  return (
    <button id="edit-btn" onClick={() => handleEdit()}>
      Edit
    </button>
  );
}

export default WithRouter(EditPage);
