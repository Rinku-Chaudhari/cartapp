import { Add } from "@material-ui/icons";
import React from "react";
import "./Itemdetails.css";

const Itemdetails = ({ item, addToCart }) => {
  return (
    <div className="item_details_page">
      <div className="image_div">
        <img src={item[0]?.itemImage} alt="item_img" />
      </div>

      <div className="info_div">
        <p style={{ color: "coral", fontWeight: "bold", fontSize: "20px" }}>
          ${item[0]?.itemPrice}
        </p>
        <button
          onClick={() =>
            addToCart(
              item[0]?.id,
              item[0]?.itemName,
              item[0]?.itemImage,
              item[0]?.itemPrice
            )
          }
        >
          <Add style={{ fontSize: "20px", marginRight: "5px" }} />
          Add to Cart
        </button>
        <div className="specs">
          {item[0]?.itemSpecs?.map((specs) => {
            return <p key={new Date() * Math.random()}>{specs}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Itemdetails;
