import React, { useState } from "react";
import people from "./people";
import "./cards.css";

function Cards() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const [textcontrol, setTextcontrol] = useState(true);
  console.log(index);

  const control = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextperson = () => {
    setIndex((index) => {
      let newindex = index + 1;
      return control(newindex);
    });
  };

  const prevperson = () => {
    setIndex((index) => {
      let newindex = index - 1;
      return control(newindex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomPerson === index) {
      randomNumber = index + 2;
    }
    setIndex(control(randomNumber));
  };

  return (
    <article className="cards">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="img-icon">
          <i className="fa-solid fa-circle-check"></i>
        </span>
      </div>
      <h4 className="person-name">{name}</h4>
      <div className="social-medias">
        <h5 className="person-job">{job.toUpperCase()}</h5>
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-linkedin-in"></i>
      </div>
      <p className="person-text">
        {textcontrol === true ? `${text.substring(0, 130)}...` : text}
      </p>
      <button
        onClick={() => setTextcontrol(!textcontrol)}
        className="person-text-control"
      >
        {textcontrol ? "show more" : "show less"}
      </button>
      <div className="button-container">
        <button className="left-button" onClick={prevperson}>
          <i className="fa-solid fa-angles-left"></i>
        </button>
        <button className="right-button" onClick={nextperson}>
          <i className="fa-solid fa-angles-right"></i>
        </button>
      </div>
      <button
        className="random-person-button"
        onClick={() => {
          setTimeout(() => {
            randomPerson();
          }, 200);
        }}
      >
        random
      </button>
    </article>
  );
}

export default Cards;
