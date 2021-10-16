import "./App.css";
// import Card from "./component/card/Card";
import CardList from "./component/card/CardList";
// import CardFruits from "./component/card/CardFruits";
import FruitList from "./component/card/FruitList";

const people = [
  { id: 1, name: "Yuuki", age: 3 },
  { id: 2, name: "Kaori", age: 1 },
  { id: 3, name: "Yoshino", age: 5 },
  { id: 4, name: "Sho", age: 33 },
];

const fruits = [
  "Melon",
  "Peach",
  "Blueberry",
  "Orange",
  "Fig",
  "Apple",
  "Lychee",
];

function App() {
  return (
    <div>
      <h2>Card List</h2>

      {/* <Card person={people[0]} />
      <Card person={people[1]} />
      <Card person={people[2]} /> */}

      <CardList personList={people} />

      <h2>fruits</h2>
      {/* <CardFruits fruits={fruits} /> */}
      <FruitList fruitList={fruits} />
    </div>
  );
}

export default App;
