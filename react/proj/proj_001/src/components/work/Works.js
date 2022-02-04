import React from "react";
import Work from "./Work";

import "./Works.css";

function Works() {
  const work = {
    title: ["COUES", "COUES", "COUES"],
    src: ["../imgs/work.jpg", "../imgs/work.jpg", "../imgs/work.jpg"],
    text: [
      "HTML, CSS, JavaScript, React",
      "HTML, CSS, JavaScript, React",
      "HTML, CSS, JavaScript, React",
    ],
  };

  return (
    <div className="works">
      <div className="works-container">
        <h1>Works</h1>
        <Work />
      </div>
    </div>
  );
}

export default Works;
