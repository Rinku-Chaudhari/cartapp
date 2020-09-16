import React, { useState, useEffect } from "react";
import "./Categories.css";

import Axios from "axios";
import Item from "../Item/Item";

const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		Axios.get(`https://rest-api-node-js-s.herokuapp.com/categories`).then(
			(res) => {
				setCategories(res.data.categories);
			}
		);
	}, []);

	return (
		<div className="categories_page">
			<h4>Our Products</h4>

			<div className="categories">
				{categories.map((category) => {
					return (
						<Item
							key={category.id}
							id={category.id}
							name={category.categoryName}
							image={category.categoryImage}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Categories;
