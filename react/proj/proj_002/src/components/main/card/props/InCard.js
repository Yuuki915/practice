import React from "react";

import "./InCard.css";

function InCard(props) {
  return (
    <div
      className="in-card"
      style={{
        position: "absolute",
        bottom: `${props.posiBottom}rem`,
        right: `${props.posiRight}rem`,
      }}
      onClick={props.showInfo}
    >
      <div
        className="box"
        style={{
          backgroundColor: `${props.bgColor}`,
        }}
      >
        <div className="box-circle"></div>
        <p className="text-in-box">{props.boxTitle}</p>
        <p className="num-in-box">{props.numInBox}</p>
      </div>
    </div>
  );
}

export default InCard;
