import React, { useEffect } from "react";
import "./Navbar.css";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import Badge from "@material-ui/core/Badge";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as Actions from "../../ActionCreators/actions";

const Navbar = ({ cartLength, SET_CART }) => {
	useEffect(() => {
		SET_CART();
	}, [SET_CART]);

	return (
		<div className="navbar">
			<div className="left">
				<Link to="/">
					<LocalMallIcon />
				</Link>
			</div>

			<div className="right">
				<Link to="/cart">
					<Badge badgeContent={cartLength} color="primary" max={99}>
						<ShoppingCartIcon />
					</Badge>
				</Link>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cartLength: state.initialState.cartItems.length,
	};
};

const mapActionsToProps = (dispatch) => {
	return {
		SET_CART: () => dispatch(Actions.SET_CART()),
	};
};

export default connect(mapStateToProps, mapActionsToProps)(Navbar);
