import * as Actions from "../ActionCreators/Actions";
import Axios from "axios";

const uid = localStorage.getItem("uid");

const AddToCart = (
  itemId,
  itemName,
  itemImage,
  itemPrice,
  itemQuantity,
  cartItems,
  ADD_TO_CART,
  setMsg
) => {
  const ITEM_ID = cartItems.findIndex((item) => {
    return item.itemId === itemId;
  });

  const data = {
    itemId,
    itemName,
    itemImage,
    itemPrice,
    itemQuantity,
  };

  if (ITEM_ID < 0) {
    Axios.post(
      `https://cartapp-111.firebaseio.com/${uid}/cartItems.json`,
      data
    ).then((res) => {
      setMsg("Item is added to the cart.");
      ADD_TO_CART(data);
    });
  } else {
    setMsg("Item is already in the cart.");
  }
};

export default AddToCart;
