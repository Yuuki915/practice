import React from "react";
import Lang from "./Lang";

import "./Work.css";

function Work(props) {
  return (
    <div className="work">
      <a href="/">
        <div className="work-container">
          <div className="workimg-div">
            <img className="workimg" src={props.src} alt="" />
            <h2 className="sitetitle">{props.title}</h2>
          </div>
          <div className="work-discription">
            <p className="lang-in-work">
              <Lang langs1={props.langs1} />
              <Lang langs2={props.langs2} />
              <Lang langs3={props.langs3} />
              <Lang langs4={props.langs4} />
            </p>
            {props.text}
          </div>
        </div>
      </a>
    </div>
  );
}

export default Work;
