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
        <h3>Portraits</h3>
        <p>
          Step into the captivating world of portrait photography, where the
          essence of a person's soul is immortalized through the lens. In this
          exquisite corner of our page, we invite you to explore the artistry,
          creativity, and storytelling that lies at the heart of each carefully
          crafted portrait.
        </p>
      </div>
      <div className="slideshow" style={backgroundImageStyle}></div>
    </div>
  );
};

export default Portraits;
