import React from "react";

const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => (
        <div key={person.id} className="person">
          <img src={person.image} alt={person.name} />
          <div>
            <h4>{person.name}</h4>
            <p>{person.age} years old</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
