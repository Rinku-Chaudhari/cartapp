import React from "react";
import "./404Page.css";

import Image404 from "./404Img.svg";
import Navbar from "../Navbar/Navbar";

const Four_O_Four = () => {
	return (
		<div className="four_o_four">
			<Navbar />

			<section className="content">
				<img src={Image404} alt="for_o_for" />
				<p>Page not found</p>
			</section>
		</div>
	);
};

export default Four_O_Four;
