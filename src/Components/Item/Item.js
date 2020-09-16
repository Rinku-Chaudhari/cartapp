import React, { useState } from "react";
import "./Item.css";

import { withRouter } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";

const Item = ({ id, name, image, price, history, location, addToCart }) => {
	const [loaded, setLoaded] = useState(false);
	return (
		<div style={!loaded ? { display: "none" } : null} className="item">
			<img
				src={image}
				alt="product_image"
				onLoad={() => setLoaded(true)}
				onClick={() =>
					price === undefined
						? history.push(`/category/${name}`)
						: history.push(`${location.pathname}?itemId=${id}`)
				}
			/>

			<div>
				<p>{name}</p>
				<p style={price === undefined ? { display: "none" } : null}>
					${price}
				</p>
			</div>

			<button
				style={price === undefined ? { display: "none" } : null}
				className="add_to_cart_btn"
				onClick={() => addToCart(id, name, image, price)}
			>
				<AddIcon />
				<p>Add to Cart</p>
			</button>
		</div>
	);
};

export default withRouter(Item);
