import React from "react";

import "./Work.css";

function Work(props) {
  return (
    <div className="work">
      <div className="work-container">
        <div className="workimg-div">
          <img className="workimg" src={props.src} alt="" />
          <h2>{props.title}</h2>
        </div>
        <div className="titles">
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Work;
