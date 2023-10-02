import React, { useState, useEffect } from "react";
import gallery from "./assets/gallery.js";

const Jewelry = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const preloadImages = () => {
      gallery.jewelry.images.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };
    preloadImages();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === gallery.jewelry.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${gallery.jewelry.images[currentImageIndex]})`,
    transition: "background-image 1s ease-in-out",
    loading: "lazy",
  };
  return (
    <div className="gallery-wrapper">
      <div className="slide-info">
        <h4>Jewelry</h4>
        <p>
          My jewelry photography service is designed to make a single precious
          gem or accessory shine in the spotlight. I understand the importance
          of high-quality visuals in the jewelry industry and excel in
          highlighting the intricate details, brilliant colors, and unique
          designs of your piece. Whether you're a jewelry designer, retailer, or
          collector, my photography will enhance the allure of your single
          creation.
        </p>
      </div>
      <div className="slideshow" style={backgroundImageStyle}></div>
    </div>
  );
};

export default Jewelry;
