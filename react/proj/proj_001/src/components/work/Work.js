import React from "react";
import Lang from "./Lang";

import "./Work.css";

function Work(props) {
  return (
    <div className="work">
      <a href="/">
        <div className="work-container">
          <div className="img-and-sitename">
            <div className="workimg-div">
              <img className="workimg" src={props.src} alt="" />
              <div className="jump-to-pages">
                <a href="/">
                  <div className="visit-page">Visit</div>
                </a>
                <a href="/">
                  <div className="view-code">Code</div>
                </a>
              </div>
            </div>
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
