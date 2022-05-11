import "./App.css";
// import Books from "./component/books/book1/Books";
import { Books2 } from "./component/books/book2/Books2";
import Counter from "./component/normal/Counter";
import CounterRedux from "./component/redux/CounterRedux";

function App() {
  return (
    <div className="App">
      <Counter />
      <CounterRedux />
      <br />

      {/* <Books /> */}
      <Books2 />
    </div>
  );
}

export default App;
