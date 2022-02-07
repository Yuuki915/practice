import React from "react";

import "./Work.css";

function Work(props) {
  return (
    <div className="work">
      <div className="work-container">
        <img className="workimg" src={props.src} alt="" />
        <div className="titles">
          <h2>{props.title}</h2>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Work;
