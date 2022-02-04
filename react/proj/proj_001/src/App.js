import "./App.css";
import BgImg from "./components/BgImg";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Works from "./components/work/Works";
// import WorkSlide from "./components/work/WorkSlide";

function App() {
  return (
    <div className="App">
      <Hero />
      <BgImg />
      <About />
      <Works />
    </div>
  );
}

export default App;
