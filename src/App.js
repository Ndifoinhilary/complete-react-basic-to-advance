import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday reminders</h3>
        <List people={people} />
        <button className="btn" onClick={clearAll}>
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
