import React, { useEffect, useState } from "react";
import "./Explore.css";

import Navbar from "../Navbar/Navbar";
import Item from "../Item/Item";
import Axios from "axios";

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [items, setItems] = useState([]);

  const filteredItems = items.filter((item) => {
    return selectedCategory === "all"
      ? item
      : item.itemCategory === selectedCategory;
  });

  useEffect(() => {
    Axios.get("https://cartapp-server.herokuapp.com/products/all").then(
      (res) => {
        setItems(res.data);
      }
    );
  }, []);

  return (
    <div className="explore_page">
      <Navbar />
      <section className="category_selection">
        <button
          onClick={() => setSelectedCategory("all")}
          style={selectedCategory === "all" ? { color: "coral" } : null}
        >
          All
        </button>
        <button
          onClick={() => setSelectedCategory("shoes")}
          style={selectedCategory === "shoes" ? { color: "coral" } : null}
        >
          Shoes
        </button>
        <button
          onClick={() => setSelectedCategory("laptops")}
          style={selectedCategory === "laptops" ? { color: "coral" } : null}
        >
          Laptops
        </button>
        <button
          onClick={() => setSelectedCategory("clothing")}
          style={selectedCategory === "clothing" ? { color: "coral" } : null}
        >
          Clothing
        </button>
        <button
          onClick={() => setSelectedCategory("smartphones")}
          style={selectedCategory === "smartphones" ? { color: "coral" } : null}
        >
          Smartphones
        </button>
      </section>

      <section className="products">
        {filteredItems.map((item) => {
          return (
            <div className="product" key={item.itemId}>
              <Item
                itemId={item.itemId}
                itemImage={item.itemImageURL}
                itemPrice={item.itemPrice}
                itemName={item.itemName}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Explore;
