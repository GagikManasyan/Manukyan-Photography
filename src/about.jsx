import React from "react";
import "./css/about.css";
import gallery from "./assets/gallery";
const About = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${gallery.about.images[1]})`,
    transition: "background-image 1s ease-in-out",
    loading: "lazy",
  };
  return (
    <div id="about">
      <div id="about-container" style={backgroundImageStyle}>
        <div id="about-text">
          <h2>
            A little bit about <br /> <b>my photography...</b>{" "}
          </h2>
          <p>
            My journey in photography began when I picked up my first camera
            many years ago. It ignited a spark within me that has only grown
            stronger over time. I have mastered my skills through countless
            hours of practice, workshops, and continuous learning, always
            pushing myself to evolve and bring something new to each session.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
