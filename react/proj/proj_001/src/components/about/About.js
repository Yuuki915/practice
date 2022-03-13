import React from "react";
import H1s from "../H1s";

import "./About.css";

function About() {
  const about = {
    h1: "About",
  };
  return (
    <div className="about">
      <div className="about-container">
        <H1s h1={about.h1} />

        <div className="about-texts">
          <p className="text-head">A Front-end Developer based in Vancouver</p>
          <p className="text-body">
            Hi, I am Yuuki Hori.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            ullamcorper egestas sapien vel posuere. Sed turpis dolor, auctor
            blandit lorem ut, vestibulum tincidunt nisl. Integer quis augue sit
            amet arcu ultrices lobortis. Sed in lacus scelerisque, placerat
            magna sed, dapibus nisl. In consectetur tellus eu pellentesque
            dapibus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
