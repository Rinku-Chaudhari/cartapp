import React, { useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Explore from "./Components/Explore/Explore";
import Homepage from "./Components/Homepage/Homepage";
import Itemdetails from "./Components/Itemdetails/Itemdetails";
import fourOfour from "./Components/404Page/fourOfour";
import Cartpage from "./Components/Cartpage/Cartpage";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import * as Actions from "./ActionCreators/Actions";

const App = ({ SET_CART }) => {
	useEffect(() => {
		SET_CART();
	}, []);

	const uid = localStorage.getItem("uid");
	uid === null
		? localStorage.setItem("uid", uuid())
		: localStorage.setItem("uid", uid);
	return (
		<div style={{ fontFamily: "Rubik" }}>
			<Router>
				<Switch>
					<Route path="/" exact component={Homepage} />
					<Route path="/explore" exact component={Explore} />
					<Route
						path="/itemDetails/:id"
						exact
						component={Itemdetails}
					/>
					<Route path="/cart" exact component={Cartpage} />
					<Route component={fourOfour} />
				</Switch>
			</Router>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cartItems: state.initialState.cartItems,
	};
};

const mapActionToProps = (dispatch) => {
	return {
		SET_CART: () => dispatch(Actions.SET_CART()),
	};
};

export default connect(mapStateToProps, mapActionToProps)(App);
