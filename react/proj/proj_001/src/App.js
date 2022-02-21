import "./App.css";
import React, { useState } from "react";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Works from "./components/work/Works";
import Skilles from "./components/skiles/Skilles";
import Footer from "./components/footer/Footer";

function App() {
  const [imgScale, setImgScale] = useState(1);
  const [bgScrollVal, setBgScrollVal] = useState(1);

  const getScrollVal = (target) => {
    let scrolledVal = target.target.scrollTop;
    let displayHeight = target.target.offsetHeight;
    setImgScale(Math.floor((scrolledVal / displayHeight) * 100));

    // if (imgScale >= 100 && imgScale < 1500) {
    if (imgScale >= 100) {
      setBgScrollVal(imgScale - 99);
    }
  };
  const imgScalePer = (1 + imgScale) / 100;

  if (imgScale >= 100 && imgScale < 1500) {
    // setBgScrollVal(imgScale - 99);
  }

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "scroll",
      }}
      onScroll={getScrollVal}
    >
      <Hero scalePer={imgScalePer} />

      <div
        id="main"
        className="bg-scroll"
        style={{
          backgroundPosition: `30% ${bgScrollVal / 5}%`,
        }}
      >
        <div className="bg-bl">
          <About />

          <Works />

          <Skilles />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
