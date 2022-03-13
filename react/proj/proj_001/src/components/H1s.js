import React from "react";

import "./H1s.css";

function H1s(props) {
  return (
    <div className="h1-container">
      <div className="h1-container-title">{props.h1}</div>
    </div>
  );
}

export default H1s;
