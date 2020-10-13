import React from "react";
import Item from "../../Item/Item";
import "./Trending.css";

const Trending = () => {
  return (
    <div className="trending">
      <h3>Trending this week</h3>

      <div className="items">
        <Item
          itemId={1}
          itemPrice={600}
          itemImage="https://bit.ly/3dfTTTl"
          itemName="HP Pavillion 3"
        />
        <Item
          itemId={11}
          itemPrice={50}
          itemImage="https://bit.ly/3lAIelb"
          itemName="Nike Grand X"
        />
        <Item
          itemId={9}
          itemPrice={840}
          itemImage="https://bit.ly/3lAkQ7q"
          itemName="iPhone X"
        />
        <Item
          itemId={10}
          itemPrice={20}
          itemImage="https://bit.ly/2Ian4f8"
          itemName="Bright Purple T-Shirt"
        />
      </div>
    </div>
  );
};

export default Trending;
