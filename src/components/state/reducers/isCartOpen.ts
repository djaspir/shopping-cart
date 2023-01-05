import { Action } from "../../../types/actionTypes";
import { ActionTypes } from "../../../types/actionTypes";
import { CartStateStatus } from "../state";

export const INIT_STATE: CartStateStatus = { isOpen: false };

const isCartOpenReducer = (
  state: CartStateStatus = INIT_STATE,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.OPEN_CART:
      return { isOpen: true };
    case ActionTypes.CLOSE_CART:
      return { isOpen: false };
    default:
      return state;
  }
};

export default isCartOpenReducer;
