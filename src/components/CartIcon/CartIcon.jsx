import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCart } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/icons/shopping-bag.svg";
import { cartItemsQuantitySelector } from "../../redux/cart/cart.selector";

import "./CartIcon.scss";

const CartIcon = ({ toggleCart, cartItems }) => (
  <div className="cart-icon" onClick={toggleCart}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{cartItems}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsQuantitySelector,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
