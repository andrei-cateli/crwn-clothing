import { actions } from "./user.types";

const USER_INIT_STATE = {
  currentUser: null,
};

const userReducer = (state = USER_INIT_STATE, action) => {
  switch (action.type) {
    case actions.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
