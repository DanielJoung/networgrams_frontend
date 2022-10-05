import React from "react";

function EditPage() {
  const handleEdit = () => {
    window.location = `/post/edit/${localStorage.getItem("post_id")}`;
  };
  return (
    <a className="button is-small" onClick={() => handleEdit()}>
      Edit
    </a>
  );
}

export default EditPage;
