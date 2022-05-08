import "./App.css";
import Counter from "./component/normal/Counter";
import CounterRedux from "./component/redux/CounterRedux";

function App() {
  return (
    <div className="App">
      <Counter />
      <CounterRedux />
    </div>
  );
}

export default App;
