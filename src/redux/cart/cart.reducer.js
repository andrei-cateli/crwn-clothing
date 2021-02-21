import { actions } from "./cart.types";
import { addItemToCart, removeItemFromCheckoutPage } from "./cart.utils";

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

    case actions.REMOVE_ITEM_FROM_CHECKOUT:
      return {
        ...state,
        cartItems: removeItemFromCheckoutPage(state.cartItems, action.payload),
      };

    case actions.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
