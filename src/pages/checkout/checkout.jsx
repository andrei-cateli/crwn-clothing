import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  cartItemsSelector,
  selectCartTotal,
} from "../../redux/cart/cart.selector";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import "./checkout.scss";

const Checkout = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItems={cartItem} />
    ))}

    <div className="total">Total price: ${total}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
