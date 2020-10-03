import React from "react";
import "./Homepage.css";

import Navbar from "../Navbar/Navbar";
import Categories from "../Categories/Categories";
import BasketImage from "./basket.png";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar hideSearchBar={true} />
      <div className="header">
        <img src={BasketImage} alt="basket" />
        <div className="intro_text">
          <p>
            Shopping is easier than
            <br /> ever before with shopit!
          </p>
        </div>
      </div>
      <Categories />
    </div>
  );
};

export default Homepage;
