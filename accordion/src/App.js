import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <div>
      <div className="container">
        <h3>Questions and answers sections</h3>
        <section className="info">
          {questions.map((question) => (
            <SingleQuestion
              key={question.id}
              title={question.title}
              info={question.info}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
