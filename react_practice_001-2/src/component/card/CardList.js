import Card from "./Card";

const CardList = (props) => {
  console.log(props.personList);
  const cards = props.personList.map((person) => {
    return <Card key={person.id} person={person} />;
  });
  return cards;
};

export default CardList;
