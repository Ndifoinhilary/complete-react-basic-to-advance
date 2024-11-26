import React, { useEffect, useState } from "react";

const ControllerInputs = () => {
  const [firstName, setFirstName] = useState();
  const [email, setEmail] = useState();
  const [people, setPeople] = useState([]);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };
  return (
    <div>
      <article>
        <form className="form" onSubmit={handleOnSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">add person</button>
        </form>
      </article>
      {people.map((person) => {
        const { id, firstName, email } = person;

        return (
          <div className="item" key={id}>
            <h4>{firstName}</h4>
            <p> {email} </p>
          </div>
        );
      })}
    </div>
  );
};

export default ControllerInputs;
