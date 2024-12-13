import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkPersonIndex = (number) => {
    if (number < 0) {
      return people.length - 1;
    }
    if (number >= people.length) {
      return 0;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkPersonIndex(newIndex);
    });
  };

  const prevtPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkPersonIndex(newIndex);
    });
  };

  const randomPersonSelected = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) {
      randomIndex += 1;
    }
    setIndex(checkPersonIndex(randomIndex));
  };

  return (
    <section className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author"> {name} </h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn">
          <FaChevronLeft onClick={prevtPerson} />
        </button>

        <button className="next-btn">
          <FaChevronRight onClick={nextPerson} />
        </button>
      </div>
      <button className="random-btn" onClick={randomPersonSelected}>
        surpise me
      </button>
    </section>
  );
};

export default Review;