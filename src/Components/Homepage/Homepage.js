import React from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Justadded from "./Justadded/Justadded";
import Reviews from "./Reviews/Reviews";
import Trending from "./Trending/Trending";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Header />
      <Trending />
      <Justadded />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Homepage;
