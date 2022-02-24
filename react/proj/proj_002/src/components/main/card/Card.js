import React from "react";
import { useState } from "react";
import AboutMe from "../eventComponent/AboutMe";
import Skilles from "../eventComponent/Skilles";
import Works from "../eventComponent/Works";

import "./Card.css";
import InCard from "./props/InCard";

function Card() {
  const inCard = {
    boxTitle: ["About Me", "My Works", "Skilles"],
    numInBox: ["01", "02", "03"],
    bgColor: ["#fce5cd", "#ead1dc", "#CFE2F3"],
    posiBottom: [3, 17],
    posiRight: [4, 18],
    posiFloat: { btm: [2, 4], rght: [2, 4] },
  };

  const [aboutDispCss, setAboutDispCss] = useState(false);
  const aboutShowInfo = () => {
    setAboutDispCss(!aboutDispCss);

    setWorksDispCss(false);
    setSkillesDispCss(false);
  };
  const [worksDispCss, setWorksDispCss] = useState(false);
  const worksShowInfo = () => {
    setWorksDispCss(!worksDispCss);

    setAboutDispCss(false);
    setSkillesDispCss(false);
  };
  const [skillesDispCss, setSkillesDispCss] = useState(false);
  const skillesShowInfo = () => {
    setSkillesDispCss(!skillesDispCss);

    setAboutDispCss(false);
    setWorksDispCss(false);
  };

  let addAboutCss = aboutDispCss ? "is-aboutOpen" : "";
  let addWorksCss = worksDispCss ? "is-worksOpen" : "";
  let addSkillesCss = skillesDispCss ? "is-skillesOpen" : "";

  return (
    <div className="card">
      <AboutMe dispCss={aboutDispCss} addAboutCss={addAboutCss} />
      <Works dispCss={worksDispCss} addWorksCss={addWorksCss} />
      <Skilles dispCss={skillesDispCss} addSkillesCss={addSkillesCss} />

      <InCard
        boxTitle={inCard.boxTitle[0]}
        numInBox={inCard.numInBox[0]}
        bgColor={inCard.bgColor[0]}
        posiBottom={inCard.posiBottom[0]}
        posiRight={inCard.posiRight[1]}
        showInfo={aboutShowInfo}
        floatBtm={inCard.posiFloat.btm[0]}
        floatRght={inCard.posiFloat.rght[0]}
      />

      <InCard
        boxTitle={inCard.boxTitle[1]}
        numInBox={inCard.numInBox[1]}
        bgColor={inCard.bgColor[1]}
        posiBottom={inCard.posiBottom[0]}
        posiRight={inCard.posiRight[0]}
        showInfo={worksShowInfo}
        floatBtm={inCard.posiFloat.btm[1]}
        floatRght={inCard.posiFloat.rght[0]}
      />

      <InCard
        boxTitle={inCard.boxTitle[2]}
        numInBox={inCard.numInBox[2]}
        bgColor={inCard.bgColor[2]}
        posiBottom={inCard.posiBottom[1]}
        posiRight={inCard.posiRight[0]}
        showInfo={skillesShowInfo}
        floatBtm={inCard.posiFloat.btm[0]}
        floatRght={inCard.posiFloat.rght[1]}
      />
    </div>
  );
}

export default Card;
