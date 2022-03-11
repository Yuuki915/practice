import React from "react";
import Lang from "./Lang";

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
          <p>
            <Lang />
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Work;
