import React from "react";
import "./Lang.css";

export default function Lang(props) {
  return (
    <div className="langs">
      <div className="lang">
        {props.langs1}
        {props.langs2}
        {props.langs3}
        {props.langs4}
        {props.langs5}
      </div>
    </div>
  );
}
