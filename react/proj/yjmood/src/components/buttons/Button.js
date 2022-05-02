import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <div className="btns">
      {/* {btns.map((btn) => ( */}
      <button className="btn">{props.btn}</button>
      {/* ))} */}
    </div>
  );
}
