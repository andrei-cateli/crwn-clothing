import React from "react";
import { connect } from "react-redux";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { cartItemsSelector } from "../../redux/cart/cart.selector";

import "./CartDropdown.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((item) => (
        <CartItem key={item.id} items={item} />
      ))}
    </div>
    <Button>Go To Checkout </Button>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: cartItemsSelector(state),
});

export default connect(mapStateToProps)(CartDropdown);
