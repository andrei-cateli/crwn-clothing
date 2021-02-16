import { actions } from "./cart.types";

const CART_INIT_STATE = {
  hidden: true,
};

const cartReducer = (state = CART_INIT_STATE, action) => {
  switch (action.type) {
    case actions.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};

export default cartReducer;
