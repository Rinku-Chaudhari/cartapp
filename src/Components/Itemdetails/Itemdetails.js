import React, { useState, useEffect } from "react";
import "./Itemdetails.css";

import Navbar from "../Navbar/Navbar";
import Axios from "axios";
import AddIcon from "@material-ui/icons/Add";
import notFoundImg from "./notFound.svg";
import * as Actions from "../../ActionCreators/Actions";
import { connect } from "react-redux";
import AddToCart from "../../Functions/AddToCart";
import MsgView from "../MsgView/MsgView";

const Itemdetails = (props) => {
    const [itemDetails, setItemDetails] = useState("");
    const [itemQuantity, setItemQuantity] = useState(1);
    const [msg, setMsg] = useState("");

    useEffect(() => {
        Axios.get(
            `https://cartapp-server.herokuapp.com/productDetails/${props.match.params.id}`
        ).then((res) => {
            if (res.data) {
                setItemDetails(res.data[0]);
            }
        });
    }, [props.match.params.id]);

    return (
        <div className="item_details_page">
            <Navbar />
            <MsgView msg={msg} setMsg={setMsg} />

            <section
                className="not_found"
                style={itemDetails !== undefined ? { display: "none" } : null}
            >
                <img src={notFoundImg} alt="not_found_img" />
                <p>Item not found</p>
            </section>

            <section
                className="image"
                style={itemDetails === undefined ? { display: "none" } : null}
            >
                <img src={itemDetails?.itemImageURL} alt="item_image" />
            </section>

            <section
                className="item_details"
                style={itemDetails === undefined ? { display: "none" } : null}
            >
                <p>{itemDetails?.itemName}</p>
                <div className="price_quantity_div">
                    <p style={{ fontSize: "18px", color: "blue" }}>
                        ${itemDetails?.itemPrice}
                    </p>
                    <select onChange={(e) => setItemQuantity(e.target.value)}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
                <button
                    onClick={() =>
                        AddToCart(
                            itemDetails.itemId,
                            itemDetails.itemName,
                            itemDetails.itemImageURL,
                            itemDetails.itemPrice,
                            itemQuantity,
                            props.cartItems,
                            props.ADD_TO_CART,
                            setMsg
                        )
                    }
                >
                    <AddIcon />
                    <p>Add to Cart</p>
                </button>

                <div className="item_specs">
                    {itemDetails?.itemSpecs?.map((spec) => {
                        return <li key={new Date() * Math.random()}>{spec}</li>;
                    })}
                </div>
            </section>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cartItems: state.initialState.cartItems,
    };
};

const mapActionsToProps = (dispatch) => {
    return {
        ADD_TO_CART: (data) => dispatch(Actions.ADD_TO_CART(data)),
    };
};

export default connect(mapStateToProps, mapActionsToProps)(Itemdetails);
