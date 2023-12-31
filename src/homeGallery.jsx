import React from "react";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gallery from "./assets/gallery.js";
import "./css/homeGallery.css";

function HomeGallery() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div id="home-gallery">
      <motion.div ref={carousel} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {gallery.home.images.map((image) => {
            return (
              <motion.div className="gallery-img" key={image}>
                <img src={image} alt="img" />
                <img className="img-reflection" src={image} alt="img" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HomeGallery;
