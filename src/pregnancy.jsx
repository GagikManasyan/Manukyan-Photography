import React, { useState, useEffect } from "react";
import gallery from "./assets/gallery.js";

const Pregnancy = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const preloadImages = () => {
      gallery.pregnancy.images.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };
    preloadImages();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === gallery.pregnancy.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${gallery.pregnancy.images[currentImageIndex]})`,
    transition: "background-image 1s ease-in-out",
    loading: "lazy",
  };
  return (
    <div className="gallery-wrapper">
      <div className="slide-info">
        <h4>Pregnancy</h4>
        <p>
          Pregnancy is a beautiful and transformative journey, and my maternity
          or pregnant photoshoot service is dedicated to capturing the radiance
          and joy of this precious time in a single, cherished photograph. I
          create heartfelt and artistic images that celebrate the miracle of
          life and the anticipation of your growing family. My expertise in
          making expectant mothers feel comfortable and confident results in an
          elegant and memorable maternity photo that you'll cherish forever.
        </p>
      </div>
      <div className="slideshow" style={backgroundImageStyle}></div>
    </div>
  );
};

export default Pregnancy;
