import React from "react";

import CountForm from "./CountForm";
import ScrollTest from "./ScrollTest";

export default function App() {
  const handleSubmit = (value) => {
    console.log(value);
  };

  const value = { firstInitValue: 0, secondInitValue: 9 };

  return (
    <>
      <CountForm initValue={value.firstInitValue} />

      {/* use this to solve 1 to 3 */}
      <CountForm initValue={value.secondInitValue} onSubmit={handleSubmit} />

      <ScrollTest />
    </>
  );
}

// 1. Add initial value and show it in the CountForm.
// 2. Add submit button in countForm.
// 3. When you click the Submit button you can see console by adding CountForm.onSubit handler.
// 4. Organize files by adding Components directory
// Go to <ScrollText />
