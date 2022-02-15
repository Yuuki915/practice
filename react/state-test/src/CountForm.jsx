import React, { useState } from "react";

export default function CountForm(props) {
  const [count, setCount] = useState(props.initValue);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePlusButtonClick = () => {
    setCount((prev) => ++prev);
  };

  const handleMinusButtonClick = () => {
    setCount((prev) => --prev);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleUodateClick = (event) => {
    if (!isNaN(inputValue)) {
      setCount(inputValue);
      setErrorMessage("");
      setInputValue("");
    } else {
      setErrorMessage("error: input must be number type");
    }
  };

  const handleResetClick = () => {
    setCount(props.initValue);
    setErrorMessage("");
    setInputValue("");
  };

  return (
    <div>
      <div>
        <span>{count}</span>

        <p style={{ color: "red" }}>{errorMessage}</p>
      </div>
      <div>
        <button onClick={handlePlusButtonClick}>+</button>

        <button onClick={handleMinusButtonClick}>-</button>

        <input type="text" value={inputValue} onChange={handleInputChange} />

        <button onClick={handleUodateClick}>Update</button>

        <button onClick={handleResetClick}>Reset</button>
      </div>
    </div>
  );
}
