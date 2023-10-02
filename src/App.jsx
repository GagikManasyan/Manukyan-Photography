import React from "react";
import Header from "./header.jsx";
import Home from "./home.jsx";
import About from "./about.jsx";
import Services from "./services.jsx";
import Contact from "./contact.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import "./css/App.css";

const App = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Contact />
      <ul id="page-nav">
        <li>
          <button onClick={() => scrollToSection("home")}>
            <FontAwesomeIcon icon={faDiamond} />
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("about")}>
            <FontAwesomeIcon icon={faDiamond} />
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("gallery")}>
            <FontAwesomeIcon icon={faDiamond} />
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("contact")}>
            <FontAwesomeIcon icon={faDiamond} />
          </button>
        </li>
      </ul>
    </>
  );
};

export default App;
