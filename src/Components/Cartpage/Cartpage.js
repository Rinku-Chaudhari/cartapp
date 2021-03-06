import React, { useEffect, useState } from "react";
import "./Cartpage.css";

import { connect } from "react-redux";
import * as Actions from "../../ActionCreators/Actions";
import Navbar from "../Navbar/Navbar";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ClearIcon from "@material-ui/icons/Clear";
import Axios from "axios";
import { Transition } from "react-transition-group";

const Cart = ({
  cartItems,
  SET_CART,
  REMOVE_FROM_CART,
  cartLoaded,
  INCREASE_QUANTITY,
}) => {
  const uid = localStorage.getItem("uid");
  const [totalPrice, setTotalprice] = useState(0);
  const [run, setRun] = useState(false);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    SET_CART();
    if (cartItems.length > 0) {
      const totalPrice = cartItems.reduce((a, b) => {
        return a + b.itemPrice * b.itemQuantity;
      }, 0);

      setTotalprice(totalPrice);
    }
    if (cartItems.length === 0) {
      setTotalprice(0);
    }
  }, [cartItems.length]);

  const runRemover = (key) => {
    RemoveFromCart(key);
    setRun(true);
  };

  const AddItem = (key, id, name, price, image, quantity) => {
    const data = {
      itemId: id,
      itemName: name,
      itemPrice: price,
      itemImage: image,
      itemQuantity: quantity,
    };
    Axios.put(
      `https://cartapp-111.firebaseio.com/${uid}/cartItems/${key}.json`,
      {
        ...data,
        itemQuantity: quantity + 1,
      }
    ).then((res) => {
      SET_CART();
    });
  };

  const DecreaseItem = (key, id, name, price, image, quantity) => {
    const data = {
      itemId: id,
      itemName: name,
      itemPrice: price,
      itemImage: image,
      itemQuantity: quantity,
    };
    Axios.put(
      `https://cartapp-111.firebaseio.com/${uid}/cartItems/${key}.json`,
      {
        ...data,
        itemQuantity: quantity - 1,
      }
    ).then((res) => {
      SET_CART();
    });
  };

  const RemoveFromCart = (key) => {
    Axios.delete(
      `https://cartapp-111.firebaseio.com/${uid}/cartItems/${key}.json`
    ).then((res) => {
      REMOVE_FROM_CART(key);
      setRun(false);
    });
  };

  return (
    <div className="cart">
      <Navbar />
      <div className="cart_items">
        <h4>My Cart</h4>
        <div
          className="total_price"
          style={cartItems.length < 1 ? { display: "none" } : null}
        >
          <p>Total Price</p>
          <p>${totalPrice}</p>
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            return (
              <Transition key={item.itemId} in={run} timeout={500}>
                {(state) => (
                  <div className={`cart_item ${state}`}>
                    <div className="left">
                      <img src={item.itemImage} alt="item_image" />
                      <div>
                        <p>{item.itemName}</p>
                        <div>
                          <p>${item.itemQuantity * item.itemPrice}</p>
                          <button
                            onClick={() =>
                              DecreaseItem(
                                item.id,
                                item.itemId,
                                item.itemName,
                                item.itemPrice,
                                item.itemImage,
                                item.itemQuantity
                              )
                            }
                            disabled={item.itemQuantity === 1}
                          >
                            <RemoveIcon />
                          </button>
                          <p>{item.itemQuantity}</p>
                          <button
                            onClick={() =>
                              AddItem(
                                item.id,
                                item.itemId,
                                item.itemName,
                                item.itemPrice,
                                item.itemImage,
                                item.itemQuantity
                              )
                            }
                          >
                            <AddIcon />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="right">
                      <button onClick={() => runRemover(item.id)}>
                        <ClearIcon />
                      </button>
                    </div>
                  </div>
                )}
              </Transition>
            );
          })
        ) : cartLoaded ? (
          <p>Nothing found</p>
        ) : (
              <p>Loading...</p>
            )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.initialState.cartItems,
    cartLoaded: state.initialState.cartLoaded,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    SET_CART: () => dispatch(Actions.SET_CART()),
    REMOVE_FROM_CART: (key) => dispatch(Actions.REMOVE_FROM_CART(key)),
    INCREASE_QUANTITY: (id) => dispatch(Actions.INCREASE_QUANTITY(id)),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Cart);
