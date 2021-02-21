import { createSelector } from "reselect";

const cartSelector = (state) => state.cart;

export const cartItemsSelector = createSelector(
  [cartSelector],
  (cart) => cart.cartItems
);

export const cartItemsQuantitySelector = createSelector(
  [cartItemsSelector],
  (cartItemsQuantity) =>
    cartItemsQuantity.reduce((total, item) => total + item.quantity, 0)
);
