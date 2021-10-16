import "./App.css";
import Card from "./component/card/Card";
import CustomCard from "./component/card/CustomCard";
import CardList from "./CardList";

const people = [
  { id: 1, name: "Yuuki", age: 3 },
  { id: 2, name: "Kaori", age: 1 },
  { id: 3, name: "Yoshino", age: 5 },
];

function App() {
  const cards = people.map((person) => {
    console.log(person);
    return (
      <div key={person.id}>
        {person.name} {person.age}
      </div>
    );
  });
  console.log(cards);

  return (
    <div>
      <h2>1</h2>
      <Card />

      <h2>2</h2>
      <CustomCard person={people[0]} />
      <CustomCard person={people[1]} />
      <CustomCard person={people[2]} />

      <h2>3</h2>
      {cards}

      <h2>4</h2>
      <CardList personList={people}/>
    </div>
  );
}

export default App;
