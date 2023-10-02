import React, { useState, useEffect } from "react";
import gallery from "./assets/gallery.js";

const Weddings = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const preloadImages = () => {
      gallery.weddings.images.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };
    preloadImages();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === gallery.weddings.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${gallery.weddings.images[currentImageIndex]})`,
    transition: "background-image 1s ease-in-out",
    loading: "lazy",
  };
  return (
    <div className="gallery-wrapper">
      <div className="slide-info">
        <h4>Weddings</h4>
        <p>
          Your wedding day is a once-in-a-lifetime event, and my wedding
          photography service is dedicated to preserving the magic of that day.
          I believe in capturing the beauty, emotion, and love that radiate from
          you and your partner in a single, cherished photograph. My experience
          in documenting every aspect of your wedding ensures that you have a
          stunning image to relive the joy for generations to come.
        </p>
      </div>
      <div className="slideshow" style={backgroundImageStyle}></div>
    </div>
  );
};

export default Weddings;
