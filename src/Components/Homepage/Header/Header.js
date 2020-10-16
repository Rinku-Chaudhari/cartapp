import React from "react";
import { withRouter } from "react-router";
import "./Header.css";

import Illustration from "./illus.svg";

const Header = (props) => {
  return (
    <div className="header">
      <section className="title">
        <p>
          Shop now with shopit!
          <br />
          From groceries to tech.
        </p>
        <button onClick={() => props.history.push(`/explore`)}>
          EXPLORE NOW
        </button>
      </section>
      <section className="illustration">
        <img src={Illustration} alt="illus" />
      </section>
    </div>
  );
};

export default withRouter(Header);
