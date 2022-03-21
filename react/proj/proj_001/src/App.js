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
  // const [bgScrollVal, setBgScrollVal] = useState(0);

  let imgScalePer;

  const getScrollVal = (target) => {
    let scrolledVal = target.target.scrollTop;
    let displayHeight = target.target.offsetHeight;
    setImgScale(Math.floor((scrolledVal / displayHeight) * 700));

    // if (imgScale >= 100) {
    //   console.log(imgScale);
    // setBgScrollVal(imgScale - 99);
    //   console.log("BgVal", bgScrollVal, 20 + (bgScrollVal + 1) / 10);
    //   console.log("---");
    // }
  };
  imgScalePer = imgScale / 1000;

  return (
    <div className="App">
      <div className="app-container" onScroll={getScrollVal}>
        <Hero scalePer={imgScalePer} />

        <div className="hidden-container">
          <div
            className="main"
            style={
              {
                // boxShadow:
                //   "0 0 15px 15px rgba(255, 255, 255, 0.7), inset rgb(255 255 255 / 0.7) 0px 0px 5px 20px",
                // backgroundPosition: "50% 50%",
                // "@media (minWidth: 950px)": {
                //   backgroundPosition: `30% ${30 + (bgScrollVal + 1) / 10}%`,
                // },
              }
            }
          >
            <div className="decoline decoline1"></div>
            <div className="decoline decoline2"></div>

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
    </div>
  );
}

export default App;
