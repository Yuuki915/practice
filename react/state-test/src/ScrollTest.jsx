import React, { useState } from "react";

export default function ScrollTest() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <p>{count}</p>

      <div
        style={{
          border: "1px solid black",
          height: "100px",
          width: "100px",
          overflow: "scroll",
        }}
        onScroll={({ target }) => {
          setCount(Math.floor((target.scrollTop / 202) * 100));
        }}
      >
        <div
          style={{
            border: "1px solid black",
            height: "300px",
            width: "100px",
            backgroundColor: "red",
          }}
        />
      </div>

      <div
        style={{
          height: "500px",
          width: "500px",
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        <img
          src="https://www.thesprucepets.com/thmb/3-kxAtZmAchP9y7PVFH2h1dKxqY=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg"
          alt=""
          style={{
            height: "500px",
            width: "500px",

            transform: `scale(${1 + count / 50})`,
          }}
        />
      </div>
    </div>
  );
}

// TOOD:
// 1. Change count 1 to 100
// 2. ....
