import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <p>{props.person.name}</p>
      <p>{props.person.age}</p>
    </div>
  );
};


export default Card;
