import React, { useEffect, useState } from "react";

const ExampleTernaryOperator = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button className="btn" onClick={() => setShow(!show)}>
        {" "}
        Show/Hide{" "}
      </button>

      {show && <Item />}
    </div>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <div>
      <h2> Windows size is : {size} </h2>
    </div>
  );
};

export default ExampleTernaryOperator;
