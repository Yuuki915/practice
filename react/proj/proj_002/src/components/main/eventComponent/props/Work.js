import React from "react";

import "./Work.css";

function Work(props) {
  return (
    <div className="work">
      <div className="work-container">
        <div className="work-img">
          <img src={props.workImg} alt="" />
        </div>
        <div className="work-text">
          <h3>{props.siteTitle}</h3>
          <p>{props.siteExplain}</p>
        </div>
      </div>
    </div>
  );
}

export default Work;
