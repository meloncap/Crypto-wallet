import React from "react";
import ReactLoading from "react-loading";
import "./styles.scss";

const Loading = () => {
  return (
    <div className="loading">
      <ReactLoading type="bubbles" />
    </div>
  );
};

export default Loading;
