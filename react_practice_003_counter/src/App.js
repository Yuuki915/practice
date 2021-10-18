import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div
      className="ui container"
      style={({ marginTop: "20px", textAlign: "center" })}
    >
      <Counter />
    </div>
  );
}

export default App;
