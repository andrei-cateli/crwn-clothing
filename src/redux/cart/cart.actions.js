import { actions } from "./cart.types";

export const toggleCart = () => ({
  type: actions.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: actions.ADD_ITEM,
  payload: item,
});

export const removeItemCheckout = (item) => ({
  type: actions.REMOVE_ITEM_FROM_CHECKOUT,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: actions.CLEAR_ITEM_FROM_CART,
  payload: item,
});
