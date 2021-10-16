import CardFruits from "./CardFruits";

const FruitList = (props) => {
  console.log(props.fruitList);
  const fruitCards = props.fruitList.map((fruit) => {
    return <CardFruits fruits={fruit}/>;
  });
  return fruitCards;
};

export default FruitList;
