import React from "react";

function CancelButton() {
  const handleCancel = (e) => {
    e.preventDefault();
    window.location = "/";
  };

  return (
    <input
      type="submit"
      className="is-danger is-rounded button"
      value="Cancel"
      onClick={handleCancel}
    />
  );
}

export default CancelButton;
