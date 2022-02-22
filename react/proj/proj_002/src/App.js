import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Header />

        <Main />

        <Footer />
      </div>
    </div>
  );
}

export default App;