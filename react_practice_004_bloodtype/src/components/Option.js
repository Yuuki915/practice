import classes from "./Option.module.css";

const Option = (props) => {
  return (
    <div className={classes.option}>
      
      <span>{props.options.chose}</span>
    </div>
  );
};

export default Option;
