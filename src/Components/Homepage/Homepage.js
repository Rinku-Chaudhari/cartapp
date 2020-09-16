import React from "react";
import "./Homepage.css";

import Navbar from "../Navbar/Navbar";
import Categories from "../Categories/Categories";

const Homepage = () => {
	return (
		<div className="homepage">
			<Navbar />
			<Categories />
		</div>
	);
};

export default Homepage;
