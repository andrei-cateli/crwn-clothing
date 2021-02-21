import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cart.actions";
import { addItem, removeItemCheckout } from "../../redux/cart/cart.actions";

import "./CheckoutItem.scss";

const CheckoutItem = ({
  removeItem,
  cartItems,
  addItem,
  removeItemCheckout,
}) => {
  const { name, imageUrl, price, quantity } = cartItems;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={() => removeItemCheckout(cartItems)}>
          &#10094;
        </span>
        <span className="value">{quantity} </span>
        <span className="arrow" onClick={() => addItem(cartItems)}>
          &#10095;
        </span>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItems)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItemCheckout: (item) => dispatch(removeItemCheckout(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
