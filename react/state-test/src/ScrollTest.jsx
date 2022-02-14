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
          setCount(target.scrollTop);
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

      <img
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rd.com%2Flist%2Fcutest-dog-breeds%2F&psig=AOvVaw0nwPkyp5B95-b9CKXAjjlx&ust=1644823320607000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjohsCS_PUCFQAAAAAdAAAAABAJ"
        style={{
          height: "500px",
          width: "1000px",
          // transform: `scale(${count})`,
        }}
      />
    </div>
  );
}

// TOOD:
// 1. Change count 1 to 100
// 2. ....
