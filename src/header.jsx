import React from "react";
import "./css/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header id="page-header">
      <div id="logo">
        <img src="/images/manukyan-logo.png" alt="logo" />
      </div>
      <nav>
        <ul id="page-nav">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Gallery</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Contact Me</a>
          </li>
        </ul>
        <ul id="socials">
          <li>
            <a href="">
              <FontAwesomeIcon icon={faInstagram} id="inst-icon" />
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <FontAwesomeIcon icon={faFacebook} id="fb-icon" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
