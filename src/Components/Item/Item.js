import React, { useState } from "react";
import "./Item.css";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as Actions from "../../ActionCreators/Actions";
import Axios from "axios";
import AddToCart from "../../Functions/AddToCart";
import MsgView from "../MsgView/MsgView";

const Item = ({
  itemId,
  itemPrice,
  itemName,
  itemImage,
  history,
  cartItems,
  ADD_TO_CART,
}) => {
  const [msg, setMsg] = useState("");
  return (
    <div className="item">
      <MsgView msg={msg} setMsg={setMsg} />
      <section className="image">
        <img
          src={itemImage}
          alt="text_img"
          onClick={() => history.push(`/itemDetails/${itemId}`)}
        />
        <button
          onClick={() =>
            AddToCart(
              itemId,
              itemName,
              itemImage,
              itemPrice,
              1,
              cartItems,
              ADD_TO_CART,
              setMsg
            )
          }
        >
          <AddCircleOutlineIcon />
        </button>
      </section>

      <section className="info">
        <p>{itemName}</p>
        <p>${itemPrice}</p>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.initialState.cartItems,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    ADD_TO_CART: (data) => dispatch(Actions.ADD_TO_CART(data)),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Item));
