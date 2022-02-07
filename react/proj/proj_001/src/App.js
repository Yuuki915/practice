import "./App.css";
// import BgImg from "./components/BgImg";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Works from "./components/work/Works";

function App() {
  return (
    <div className="App">
      <Hero />
      <div id="main" className="bg-scroll">
        {/* <BgImg /> */}
        <About />
        <Works />
      </div>
    </div>
  );
}

export default App;
