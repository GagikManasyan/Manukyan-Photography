import React from "react";
import Portraits from "./portraits";
import Weddings from "./weddings";
import Jewelry from "./jewelry";
import Pregnancy from "./pregnancy";
import Commercials from "./commercials";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./css/services.css";

const Services = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div id="gallery">
      <h3>Services</h3>
      <motion.div ref={carousel} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          <Portraits />
          <Weddings />
          <Jewelry />
          <Pregnancy />
          <Commercials />
        </motion.div>
        <span className="hint">
          Slide <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </motion.div>
    </div>
  );
};

export default Services;
