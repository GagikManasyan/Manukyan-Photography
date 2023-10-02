import React, { useState, useEffect } from "react";
import gallery from "./assets/gallery.js";
import "./css/portraits.css";

const Portraits = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const preloadImages = () => {
      gallery.portraits.images.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };
    preloadImages();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === gallery.portraits.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${gallery.portraits.images[currentImageIndex]})`,
    transition: "background-image 1s ease-in-out",
    loading: "lazy",
  };
  return (
    <div className="gallery-wrapper">
      <div className="slide-info">
        <h4>Portraits</h4>
        <p>
          My portrait photography service is all about capturing the unique
          essence of you. Whether it's a headshot for your professional profile,
          a personal photoshoot, or a family portrait, I specialize in creating
          a single, timeless image that showcases your personality and style. My
          keen eye for detail and ability to make you feel comfortable in front
          of the camera ensure a stunning portrait that tells your story.
        </p>
      </div>
      <div className="slideshow" style={backgroundImageStyle}></div>
    </div>
  );
};

export default Portraits;
