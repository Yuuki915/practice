import classes from "./Question.module.css";

const Question = (props) => {
  return (
    <div className={classes.ask}>
      <h2>{props.questions.ask1}</h2>
    </div>
  );
};

export default Question;
