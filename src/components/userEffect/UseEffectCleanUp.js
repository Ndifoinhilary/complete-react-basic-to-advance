import React, { useEffect, useState } from "react";

const UseEffectCleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize(window.innerWidth);
    });

    //  clean up function to remove the useEffect from re-rendering after the main component has being rendered
    return () => {
      window.removeEventListener("resize", () => {
        setSize(window.innerWidth);
      });
    };
  }, []);
  return (
    <div>
      <h1> windows size </h1>
      <h2> {size} px </h2>
    </div>
  );
};

export default UseEffectCleanUp;
