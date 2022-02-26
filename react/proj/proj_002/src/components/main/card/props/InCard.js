import React from "react";
import styled, { keyframes } from "styled-components";

import "./InCard.css";

function InCard(props) {
  // animation
  const FloatAniKey = keyframes`
  0%,
  100% {
    transform: translateY(0px);
  }
  35%,
  83% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(-5px);
  }
  `;
  const FloatCss = styled.div`
    animation: ${FloatAniKey} 10s ${props.aniDelay}s infinite alternate
      ease-in-out;
  `;

  return (
    <FloatCss
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
        <p className="text-in-box">{props.boxTitle}</p>
        <p className="num-in-box">{props.numInBox}</p>
      </div>
      <div className="box-circle"></div>
    </FloatCss>
  );
}

export default InCard;
