import React from "react";
import HomeGallery from "./homeGallery.jsx";
import "./css/home.css";

const Home = () => {
  return (
    <div id="home">
      <h1>
        photography for capturing <br /> special moments...
      </h1>
      <HomeGallery />
    </div>
  );
};

export default Home;
