import React, { useState } from "react";
import "./Navbar.css";

import { NavLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import { connect } from "react-redux";
import * as Actions from "../../ActionCreators/Actions";

const Navbar = ({ cartLength }) => {
  const [view, setView] = useState("desktop");
  return (
    <div className="navbar">
      <section style={view !== "desktop" ? { display: "none" } : null}>
        <NavLink to="/">SHOPIT</NavLink>
      </section>

      <section style={view !== "desktop" ? { display: "none" } : null}>
        <NavLink to="/explore" activeStyle={{ color: "coral" }}>
          All Products
        </NavLink>
        <NavLink to="/cart" activeStyle={{ color: "coral" }}>
          My Cart({`${cartLength}`})
        </NavLink>
      </section>

      <section
        className="mobile_menu"
        style={view !== "desktop" ? { display: "none" } : null}
      >
        <button onClick={() => setView("mobile")}>
          <MenuIcon />
        </button>
      </section>

      <section
        className="mobile_nav"
        style={view === "desktop" ? { display: "none" } : null}
      >
        <div className="left">
          <NavLink to="/explore" activeStyle={{ color: "coral" }}>
            All Products
          </NavLink>
          <NavLink to="/cart" activeStyle={{ color: "coral" }}>
            My Cart({`${cartLength}`})
          </NavLink>
        </div>

        <div className="right">
          <button onClick={() => setView("desktop")}>
            <ClearIcon />
          </button>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartLength: state.initialState.cartItems.length,
  };
};

const mapActionToProps = (dispatch) => {
  return {
    SET_CART: () => dispatch(Actions.SET_CART()),
  };
};

export default connect(mapStateToProps, mapActionToProps)(Navbar);
