import classes from "./CustomCard.module.css";

const CustomCard = (props) => {
  return (
    <div>
      <div className={classes.card}>
        <p>{props.person.name}</p>
        <p>{props.person.age}</p>
      </div>
    </div>
  );
};

export default CustomCard;
