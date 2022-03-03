import React from "react";

import "./H1s.css";

function H1s(props) {
  return (
    <div className="h1-container">
      <h1 className="h1-container-title">{props.h1}</h1>
    </div>
  );
}

export default H1s;
