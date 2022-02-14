import React, { useState } from "react";
import styled from "styled-components";
import heroImg from "../imgs/hero.jpg";
import "./Hero.css";

const Hero = () => {
  const [imgScale, setImgScale] = useState(1);

  const handleScroll = () => {
    console.log("hey hey ho");
    setImgScale(imgScale + 0.1);
  };

  const HeroImg = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url("${heroImg}");
    background-size: cover;
    background-position: 40% 50%;
    transform: scale(${imgScale});
  `;

  return (
    <div className="hero">
      <HeroImg onScroll={handleScroll} />

      <h1 className="siteTitle">
        <span>Yuuki Hori</span>
      </h1>
    </div>
  );
};

export default Hero;
