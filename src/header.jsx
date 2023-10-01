import React from "react";
import "./css/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { isMobile } from "react-device-detect";

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
            <a
              href="#"
              onClick={() => {
                if (isMobile) {
                  window.open(
                    "instagram://user?username=manoukyan_photography'"
                  );
                } else {
                  window.open(
                    "https://www.instagram.com/manoukyan_photography/",
                    "_blank"
                  );
                }
              }}
            >
              <FontAwesomeIcon icon={faInstagram} id="inst-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/VardtineManukyan">
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
