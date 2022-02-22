import React from "react";
// import { useState } from "react";

import "./AboutMe.css";

function AboutMe(props) {
  return (
    <div
      className="about-me"
      style={{
        display: "none",
      }}
    >
      <div className="texts-and-img">
        <p className="name-in-about">Yuki Hori</p>
        <div className="texts">
          <div className="img">
            <img src="" alt="" />
          </div>
          <p className="text-in-about">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
