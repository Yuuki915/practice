import "./App.css";
import Card from "./component/card/Card";
import CustomCard from "./component/card/CustomCard";

const people = [
  { id: 1, name: "Yuuki", age: 3 },
  { id: 2, name: "Kaori", age: 1 },
  { id: 3, name: "Yoshino", age: 5 },
];

function App() {
  return (
    <div>
      <h2>1</h2>
      <Card />

      <h2>2</h2>
      <CustomCard person={people[0]} />
      <CustomCard person={people[1]} />
      <CustomCard person={people[2]} />

    </div>
  );
}

export default App;
