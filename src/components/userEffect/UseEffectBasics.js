import React, { useEffect, useState } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    document.title = `CLicked ${value}`;
  });
  return (
    <div>
      <h1> {value} </h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me yoo
      </button>
    </div>
  );
};

export default UseEffectBasics;
