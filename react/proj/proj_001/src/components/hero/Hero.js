import React from "react";
import heroImg from "../imgs/hero.jpg";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <img className="heroImg" src={heroImg} alt="" />
      <h1 className="siteTitle">
        <span>Yuuki Hori</span>
      </h1>
    </div>
  );
}

export default Hero;
