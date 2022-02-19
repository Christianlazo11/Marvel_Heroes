import React from "react";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="spinner-border text-danger"
        role="status"
        style={{ width: "5rem", height: "5rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
