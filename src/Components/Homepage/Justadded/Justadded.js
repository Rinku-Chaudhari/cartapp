import React from "react";
import "./Justadded.css";

import Item from "../../Item/Item";

const Justadded = () => {
  return (
    <div className="just_added">
      <h3>Just added</h3>

      <div className="items">
        <Item
          itemId={2}
          itemPrice={340}
          itemImage="https://bit.ly/36Q4lQl"
          itemName="Dell inspiron 3"
        />
        <Item
          itemId={4}
          itemPrice={140}
          itemImage="https://bit.ly/2SI4f59"
          itemName="German Sherpard Coat"
        />
        <Item
          itemId={6}
          itemPrice={540}
          itemImage="https://bit.ly/2H6mqiv"
          itemName="Google Pixel 3"
        />
        <Item
          itemId={3}
          itemPrice={90}
          itemImage="https://bit.ly/36PxPOe"
          itemName="Camel shoes Z"
        />
      </div>
    </div>
  );
};

export default Justadded;
