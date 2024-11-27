import React, { useState } from "react";
import { data } from "../../data";

const ProDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    const person = people.filter((person) => person.id !== id);
    setPeople(person);
  };
  return (
    <div>
      <h3>Pro drilling</h3>
      <List people={people} removePerson={removePerson} />
    </div>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <div>
      {people.map((person) => {
        return (
          <SingleItem key={person.id} {...person} removePerson={removePerson} />
        );
      })}
    </div>
  );
};

const SingleItem = ({ id, name, removePerson }) => {
  return (
    <div className="item">
      <h3> {name} </h3>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  );
};
export default ProDrilling;
