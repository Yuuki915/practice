import React from "react";
import Button from "../button/Button";

export default function DatePage() {
  const datePage = { dates: [1, 2, 3, 4, 5, 6, 7], btn: "Select time" };
  return (
    <div>
      <p>Welcome, user</p>

      <form>
        <select>
          {datePage.dates.map((date) => (
            <option value={date} key={date}>
              {date}
            </option>
          ))}
        </select>
        <br />
        <Button
          btn={datePage.btn}
          // onClick={}
        />
      </form>
    </div>
  );
}
