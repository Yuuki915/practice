import React from "react";
import H1s from "../H1s";

// import aboutImg from "../imgs/about.jpg";
import "./About.css";

function About() {
  const about = {
    h1: "About",
  };
  return (
    <div className="about">
      <div className="about-container">
        <H1s h1={about.h1} />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
          ullamcorper egestas sapien vel posuere. Sed turpis dolor, auctor
          blandit lorem ut, vestibulum tincidunt nisl. Integer quis augue sit
          amet arcu ultrices lobortis. Sed in lacus scelerisque, placerat magna
          sed, dapibus nisl. In consectetur tellus eu pellentesque dapibus.
        </p>
      </div>
    </div>
  );
}

export default About;
