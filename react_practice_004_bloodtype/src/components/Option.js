import classes from "./Option.module.css";

const Option = (props) => {
  return (
    <div className={classes.option}>
      <input type="radio" name="type" id="type"></input>
      <span>{props.options.choose}</span>
    </div>
  );
};

export default Option;
