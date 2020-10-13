import React from "react";
import "./Header.css";

import Illustration from "./illus.svg";

const Header = () => {
  return (
    <div className="header">
      <section className="title">
        <p>
          Shop now with shopit!
          <br />
          From groceries to tech.
        </p>
        <button>EXPLORE NOW</button>
      </section>
      <section className="illustration">
        <img src={Illustration} alt="illus" />
      </section>
    </div>
  );
};

export default Header;
