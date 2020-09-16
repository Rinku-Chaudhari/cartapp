import React, { useState, useEffect } from "react";
import "./Category.css";

import Navbar from "../Navbar/Navbar";
import Item from "../Item/Item";
import Itemdetails from "../Itemdetails/Itemdetails";
import Axios from "axios";
import queryString from "query-string";
import { connect } from "react-redux";
import * as Actions from "../../ActionCreators/actions";
import ClearIcon from "@material-ui/icons/Clear";

const Category = (props) => {
	const category = props.match.params.category;
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [msg, setMsg] = useState("");

	const selectedItemId = queryString.parse(props.location.search);

	const AddToCart = (itemId, itemName, itemImage, itemPrice) => {
		const ITEM_ID = props.cartItems.findIndex((item) => {
			return item.itemId === itemId;
		});

		const data = {
			itemId,
			itemName,
			itemImage,
			itemPrice,
			itemQuantity: 1,
		};

		if (ITEM_ID < 0) {
			Axios.post(
				`https://ecom111.firebaseio.com/cartItems.json`,
				data
			).then((res) => {
				setMsg("Item is added to the cart.");
				props.ADD_TO_CART(data);
			});
		} else {
			setMsg("Item is already in the cart.");
		}
	};

	useEffect(() => {
		Axios.get(
			`https://rest-api-node-js-s.herokuapp.com/products/${category}`
		).then((res) => {
			setItems(res.data.filteredItems);
			setLoading(false);
		});
	}, [category]);

	return (
		<div className="category">
			<Navbar />

			<div
				className="msg_div"
				style={msg === "" ? { display: "none" } : null}
			>
				<p>{msg}</p>
				<button onClick={() => setMsg("")}>
					<ClearIcon />
				</button>
			</div>

			<div
				className="category_items"
				style={
					loading || selectedItemId.itemId !== undefined
						? { display: "none" }
						: null
				}
			>
				{items.map((item) => {
					return (
						<Item
							addToCart={AddToCart}
							key={item.id}
							id={item.id}
							name={item.itemName}
							image={item.itemImage}
							price={item.itemPrice}
						/>
					);
				})}
			</div>

			<div
				className="item_details_view"
				style={
					loading || selectedItemId.itemId === undefined
						? { display: "none" }
						: null
				}
			>
				<Itemdetails
					addToCart={AddToCart}
					item={items?.filter((item) => {
						return item.id === parseInt(selectedItemId.itemId);
					})}
				/>
			</div>

			<div
				className="loading_view"
				style={!loading ? { display: "none" } : null}
			>
				<p>Loading...</p>
			</div>
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
		SET_CART: () => dispatch(Actions.SET_CART()),
	};
};

export default connect(mapStateToProps, mapActionsToProps)(Category);
