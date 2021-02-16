import { actions } from "./cart.types";
import { addItemToCart } from "./cart.utils";

const CART_INIT_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = CART_INIT_STATE, action) => {
  switch (action.type) {
    case actions.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case actions.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
