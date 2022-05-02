import "./App.css";
import Header from "./header/Header";
import Recommends from "./components/recommends/Recommends";

import Footer from "./footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Recommends />
      </main>

      <Footer />
    </div>
  );
}

export default App;
