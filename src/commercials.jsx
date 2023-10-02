import React, { useState, useEffect } from "react";
import gallery from "./assets/gallery.js";

const Commercials = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const preloadImages = () => {
      gallery.commercials.images.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };
    preloadImages();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === gallery.commercials.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${gallery.commercials.images[currentImageIndex]})`,
    transition: "background-image 1s ease-in-out",
    loading: "lazy",
  };
  return (
    <div className="gallery-wrapper">
      <div className="slide-info">
        <h4>Commercials</h4>
        <p>
          Elevate your brand's image with my commercial photography services. I
          collaborate closely with businesses, helping them communicate their
          products, services, and values through captivating visuals. My
          expertise in creating eye-catching images for advertising campaigns,
          product catalogs, and digital marketing ensures that you can convey
          your brand's story and captivate your target audience with a single,
          striking photograph.
        </p>
      </div>
      <div className="slideshow" style={backgroundImageStyle}></div>
    </div>
  );
};

export default Commercials;
