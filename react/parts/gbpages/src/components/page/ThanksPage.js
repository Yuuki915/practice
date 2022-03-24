import React, { useState } from "react";

export default function ThanksPage() {
  //   const [comfirm, setComfirm] = useState("Success");
  const comfirm = "Success";
  return (
    <div>
      <h2>{comfirm}</h2>
      <p>Your Booking is 'date' 'time'</p>
      <p>See you soon!</p>
    </div>
  );
}
