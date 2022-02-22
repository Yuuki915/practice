import React from "react";

import "./Card.css";
import InCard from "./props/InCard";

function Card() {
  const inCard = {
    text: ["Profile", "Works", "Skilles"],
    boxTitle: ["About Me", "My Works", "Skilles"],
    numInBox: ["01", "02", "03"],
    bgColor: ["#fce5cd", "#ead1dc", "#CFE2F3"],
    posiBottom: [3, 17],
    posiRight: [4, 18],
  };

  return (
    <div className="card">
      <InCard
        text={inCard.text[0]}
        boxTitle={inCard.boxTitle[0]}
        numInBox={inCard.numInBox[0]}
        bgColor={inCard.bgColor[0]}
        posiBottom={inCard.posiBottom[0]}
        posiRight={inCard.posiRight[1]}
      />

      <InCard
        text={inCard.text[1]}
        boxTitle={inCard.boxTitle[1]}
        numInBox={inCard.numInBox[1]}
        bgColor={inCard.bgColor[1]}
        posiBottom={inCard.posiBottom[0]}
        posiRight={inCard.posiRight[0]}
      />

      <InCard
        text={inCard.text[2]}
        boxTitle={inCard.boxTitle[2]}
        numInBox={inCard.numInBox[2]}
        bgColor={inCard.bgColor[2]}
        posiBottom={inCard.posiBottom[1]}
        posiRight={inCard.posiRight[0]}
      />
    </div>
  );
}

export default Card;
