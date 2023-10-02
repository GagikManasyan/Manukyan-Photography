import React from "react";
import "./css/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { isMobile } from "react-device-detect";

const Contact = () => {
  return (
    <div id="contact">
      <div id="logo">
        <img src="/images/manukyan-logo.png" alt="logo" />
      </div>
      <div id="contact-info">
        <ul>
          <li>
            <a href="tel:096400186">
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <span>096-400-186</span>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                if (isMobile) {
                  window.location.href =
                    "instagram://user?username=manoukyan_photography";
                  setTimeout(() => {
                    window.location.href =
                      "https://www.instagram.com/manoukyan_photography/";
                  }, 1500);
                } else {
                  window.open(
                    "https://www.instagram.com/manoukyan_photography/"
                  );
                }
              }}
            >
              <FontAwesomeIcon icon={faInstagram} id="inst-icon" />
            </a>
            <span>@manoukyan_photography</span>
          </li>
          <li>
            <a href="https://www.facebook.com/VardtineManukyan">
              <FontAwesomeIcon icon={faFacebook} id="fb-icon" />
            </a>
            <span>@VardineM</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
