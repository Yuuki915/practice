import React from "react";
import bgImg from "./imgs/about.jpg";

import "./BgImg.css";

function BgImg() {
  return (
    <div className="bgimg">
      <img src={bgImg} alt="" />
    </div>
  );
}

export default BgImg;
