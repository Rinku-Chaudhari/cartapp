import React, { useEffect, useState } from "react";
import "./Explore.css";

import Navbar from "../Navbar/Navbar";
import Item from "../Item/Item";
import Axios from "axios";
import Loader from "../Loader/Loader";

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const filteredItems = items.filter((item) => {
    return selectedCategory === "all"
      ? item
      : item.product_category === selectedCategory;
  });

  useEffect(() => {
    Axios.get("https://cartapp-server.herokuapp.com/products/all")
      .then((res) => {
        setItems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
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

      <section
        className="products"
        style={loading ? { display: "none" } : null}
      >
        {filteredItems.map((item) => {
          return (
            <div className="product" key={item.product_id}>
              <Item
                itemId={item.product_id}
                itemImage={item.product_image}
                itemPrice={item.product_price}
                itemName={item.product_name}
              />
            </div>
          );
        })}
      </section>

      <section className="loader" style={!loading ? { display: "none" } : null}>
        <Loader />
      </section>
    </div>
  );
};

export default Explore;
