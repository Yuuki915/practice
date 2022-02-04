import React from "react";
// import workImg from "../imgs/work.jpg";
// import WorkSlide from "./WorkSlide";

import "./Work.css";

function Work(props) {
  // const works = [
  //   { no: 1, title: "COEUS", img: "../imgs/work.jpg" },
  //   { no: 2, title: "COEUS", img: "../imgs/work.jpg" },
  //   { no: 3, title: "COEUS", img: "../imgs/work.jpg" },
  // ];

  return (
    <div className="work">
      <div className="work-container">
        {/* <WorkSlide works={works} /> */}
        <img className="workimg" src={props.work.src} alt="" />
        <div className="titles">
          <h2>{props.work.title[0]}</h2>
          <p>{props.work.text[0]}</p>
        </div>
      </div>
    </div>
  );
}

export default Work;
