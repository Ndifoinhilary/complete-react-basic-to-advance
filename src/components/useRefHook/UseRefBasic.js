import React, { useRef } from "react";

const UseRefBasic = () => {
  const name = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name.current);
  };
  return (
    <div>
      <form className="form">
        <div className="form-control">
          <label htmlFor="firstName">Name: </label>
          <input type="text" id="firstName" name="firstName" ref={name} />
        </div>
        <button type="submit" onSubmit={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};

export default UseRefBasic;
