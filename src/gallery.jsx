import React from "react";
import Portraits from "./portraits";
import Weddings from "./weddings";
import Jewelry from "./jewelry";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./css/gallery.css";

const Gallery = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div id="gallery">
      <h2>Gallery</h2>
      <motion.div ref={carousel} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          <Portraits />
          <Weddings />
          <Jewelry />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Gallery;
