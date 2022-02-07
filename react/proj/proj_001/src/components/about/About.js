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
          ;hsjdkbfa;kjwfbns;kajnca;wejfba;j
          <br />
          sk ;awljbfn;wajkbsdf ;jdksnbmfa;lkwenfl;
          <br />
          jlkngfjbal;jgna;lndlknaowlsjbm,nc
        </p>
      </div>
    </div>
  );
}

export default About;
