import React from "react";
import Work from "./Work";
import H1s from "../H1s";

import couesImg from "../imgs/work.jpg";

import "./Works.css";

function Works() {
  const works = {
    h1: "Works",
    title: ["COUES", "COUES", "COUES"],
    src: [couesImg, couesImg, couesImg],
    text: [
      "HTML, CSS, JavaScript, React",
      "HTML, CSS, JavaScript, React",
      "HTML, CSS, JavaScript, React",
    ],
  };

  return (
    <div className="works">
      <div className="works-container">
        <H1s h1={works.h1} />
        <div className="slide">
          <Work
            title={works.title[0]}
            src={works.src[0]}
            text={works.text[0]}
          />
          <Work
            title={works.title[1]}
            src={works.src[1]}
            text={works.text[1]}
          />
          <Work
            title={works.title[2]}
            src={works.src[2]}
            text={works.text[2]}
          />
        </div>
      </div>
    </div>
  );
}

export default Works;
