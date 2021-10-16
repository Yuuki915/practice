import "./App.css";
import Card from "./component/card/Card";
import CardList from "./component/card/CardList";

const people = [
  { id: 1, name: "Yuuki", age: 3 },
  { id: 2, name: "Kaori", age: 1 },
  { id: 3, name: "Yoshino", age: 5 },
];

function App() {
  return (
    <div>
      <h2>Card List</h2>
      <CardList personList={people}/>

    </div>
  );
}

export default App;
