import React, { useState } from "react";
import Button from "../button/Button";

export default function CompPage() {
  const compPage = {
    times: ["09:00", "10:00", "11:00", "12:00"],
    btn: "Submit",
  };
  const [available, setAvailable] = useState("◯");
  return (
    <div>
      <ul>
        {compPage.times.map((time) => (
          <li
            className="timeList"
            key={time}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <p style={{ marginRight: "2rem" }}>{time}</p>
            <p>{available}</p>
          </li>
        ))}
        <br />
        <Button
          btn={compPage.btn}
          // onClick={}
        />
      </ul>
    </div>
  );
}
