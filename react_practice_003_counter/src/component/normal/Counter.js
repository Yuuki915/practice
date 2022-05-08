import React from "react";
import { useEffect, useState } from "react/cjs/react.development";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  useEffect(() => {}, [count]);
  return (
    <div>
      <h1>Counter</h1>
      <div>{count}</div>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => increment()}>+</button>
    </div>
  );
}
