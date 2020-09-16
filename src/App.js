import React from "react";
import "./App.css";

import Homepage from "./Components/Homepage/Homepage";
import Category from "./Components/Category/Category";
import Cart from "./Components/Cart/Cart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App(props) {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route path="/" exact component={Homepage} />
					<Route path="/category/:category" component={Category} />
					<Route path="/cart" component={Cart} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
