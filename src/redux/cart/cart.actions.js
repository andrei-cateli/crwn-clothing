import { actions } from "./cart.types";

export const toggleCart = () => ({
  type: actions.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: actions.ADD_ITEM,
  payload: item,
});
