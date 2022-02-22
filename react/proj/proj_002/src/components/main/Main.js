import React from "react";
import Card from "./card/Card";
// import AboutMe from "./eventComponent/AboutMe";

import "./Main.css";

function Main(props) {
  return (
    <div className="main">
      <div className="container">
        <Card />

        {/* <AboutMe /> */}
      </div>
    </div>
  );
}

export default Main;
