import React from "react";
import WithRouter from "../page/WithRouter";

function CancelButton() {
  const handleCancel = (e) => {
    e.preventDefault();
    this.props.navigate("/");
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

export default WithRouter(CancelButton);
