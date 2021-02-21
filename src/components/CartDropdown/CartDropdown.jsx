import React from "react";
import { connect } from "react-redux";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import "./CartDropdown.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    {console.log("bum items ", cartItems)}
    <div className="cart-items">
      {cartItems.map((item) => (
        <CartItem key={item.id} items={item} />
      ))}
    </div>
    <Button>Go To Checkout </Button>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
