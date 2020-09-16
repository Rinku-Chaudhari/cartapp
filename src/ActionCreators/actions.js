import Axios from "axios";

export const DECREASE_QUANTITY = (id) => {
	return (dispatch) => {
		dispatch({ type: "INCREASE_ITEM_QUANTITY", payload: id });
	};
};

export const INCREASE_QUANTITY = (id) => {
	return (dispatch) => {
		dispatch({ type: "INCREASE_ITEM_QUANTITY", payload: id });
	};
};

export const ADD_TO_CART = (data) => {
	return (dispatch) => {
		dispatch({ type: "ADD_TO_CART", payload: data });
	};
};

export const REMOVE_FROM_CART = (key) => {
	return (dispatch) => {
		dispatch({ type: "REMOVE_FROM_CART", payload: key });
	};
};

export const SET_CART = () => {
	return (dispatch) => {
		Axios.get(`https://ecom111.firebaseio.com/cartItems.json`).then(
			(res) => {
				if (res.data) {
					const data = Object.entries(res.data);
					const finalData = [];

					for (let e in data) {
						finalData.push({
							id: data[e][0],
							itemPrice: data[e][1].itemPrice,
							itemName: data[e][1].itemName,
							itemImage: data[e][1].itemImage,
							itemQuantity: data[e][1].itemQuantity,
							itemId: data[e][1].itemId,
						});
					}
					dispatch({ type: "SET_CART", payload: finalData });
				} else {
					dispatch({ type: "SET_CART", payload: [] });
				}
			}
		);
	};
};
