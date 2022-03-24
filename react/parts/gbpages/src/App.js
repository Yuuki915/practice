import "./App.css";
import CompPage from "./components/page/CompPage";
import DatePage from "./components/page/DatePage";
import ThanksPage from "./components/page/ThanksPage";

function App() {
  return (
    <div className="app">
      <DatePage />
      <br />
      <br />
      <CompPage />
      <br />
      <br />
      <ThanksPage />
    </div>
  );
}

export default App;
