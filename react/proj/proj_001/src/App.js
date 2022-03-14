import "./App.css";
import React, { useState } from "react";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Works from "./components/work/Works";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";

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
    <div className="App">
      <div className="app-container" onScroll={getScrollVal}>
        <Hero scalePer={imgScalePer} />

        <div
          className="main"
          style={{
            backgroundPosition: `30% ${20 + bgScrollVal / 5}%`,
            // boxShadow:
            //   "0 0 15px 15px rgba(255, 255, 255, 0.7), inset rgb(255 255 255 / 0.7) 0px 0px 5px 20px",
          }}
        >
          <div className="bg-bl">
            <About />

            <Works />

            <Skills />

            <Contact />

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
