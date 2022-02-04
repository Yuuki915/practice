import React from "react";
import bgImg from "./imgs/about.jpg";

import "./BgImg.css";

function BgImg() {
  return (
    <div className="bgimg">
      <img className="bgimg" src={bgImg} alt="" />
    </div>
  );
}

export default BgImg;
