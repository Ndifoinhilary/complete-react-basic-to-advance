import React from "react";
import { data } from "../../data";

const UseStateArrayExample = () => {
  const [people, setPeople] = React.useState(data);
  const handleDeleteItem = (id) => {
    const updatedPeople = people.filter((person) => person.id !== id);
    setPeople(updatedPeople);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div className="item">
            <h3 key={id}> {name} </h3>
            <button
              type="button"
              className="btn"
              onClick={() => handleDeleteItem(id)}
            >
              Delete
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear item
      </button>
    </div>
  );
};

export default UseStateArrayExample;
