import React, { useState } from "react";

const UseStateBasic = () => {
  const [title, setTitle] = useState("Hi");
  const handleClick = () => {
    setTitle("Hello World");
    
  };

  return (
    <div>
      <p>{title}</p>
      <button className="btn" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
};

export default UseStateBasic;
