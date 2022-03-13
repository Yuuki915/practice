import React from "react";
import Button from "../button/Button";

export default function Start() {
  const btn = ["START"];

  const moveToQuestion = () => {
    console.log("hi");
  };

  return (
    <div>
      <div>血液型相性診断</div>
      <Button btn={btn[0]} onClick={moveToQuestion} />
    </div>
  );
}
