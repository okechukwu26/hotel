import React from "react";
import loading from "../images/gif/loading-arrow.gif";

function Loading() {
  return (
    <div className="loading">
      <h2> Rooms Data loading ...</h2>
      <img src={loading} alt="loading" />
    </div>
  );
}

export default Loading;
