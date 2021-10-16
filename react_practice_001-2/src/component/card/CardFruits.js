import classes from "./Card.module.css";

const CardFruits = (props) => {
  return (
    <div className={classes.cardFruits}>
      <p>{props.fruits}</p>
    </div>
  );
};

export default CardFruits;
