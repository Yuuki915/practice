import React from "react";
import Button from "../buttons/Button";

export default function Recommend(props) {
  return (
    <div className="recommend" style={props.style}>
      <div className="img-container" style={props.imgContainerStyle}>
        <img
          className="recomImg"
          style={props.imgStyle}
          src={props.src}
          alt=""
        />
        <img
          className="recomImgBg"
          style={props.imgBgStyle}
          src={props.srcBg}
          alt=""
        />
      </div>
      <div className="h2-btn" style={props.textStyle}>
        <h2 className="recom-h2">{props.h2}</h2>
        <Button btn={props.btn} />
      </div>
    </div>
  );
}
