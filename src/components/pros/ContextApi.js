import React, { useContext, useState } from "react";
import { data } from "../../data";

const personContext = React.createContext();

const ContextApi = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    const person = people.filter((person) => person.id !== id);
    setPeople(person);
  };
  return (
    <personContext.Provider value={{ removePerson, people }}>
      <h3>Pro drilling</h3>
      <List />
    </personContext.Provider>
  );
};

const List = () => {
  const { people } = useContext(personContext);
  return (
    <div>
      {people.map((person) => {
        return <SingleItem key={person.id} {...person} />;
      })}
    </div>
  );
};

const SingleItem = ({ id, name }) => {
  const { removePerson } = useContext(personContext);
  return (
    <div className="item">
      <h3> {name} </h3>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  );
};

export default ContextApi;
