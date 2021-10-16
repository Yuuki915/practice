import CustomCard from "./component/card/CustomCard";

const CardList = (props) => {
  console.log(props.personList);
  const cards = props.personList.map((person) => {
    return <CustomCard key={person.id} person={person} />;
  });
  return cards;
};

export default CardList;
