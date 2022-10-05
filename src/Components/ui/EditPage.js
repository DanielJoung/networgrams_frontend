import React from "react";

function EditPage() {
  const handleEdit = () => {
    window.location = `/post/edit/${localStorage.getItem("post_id")}`;
  };
  return (
    <button className="button is-small" onClick={() => handleEdit()}>
      Edit
    </button>
  );
}

export default EditPage;
