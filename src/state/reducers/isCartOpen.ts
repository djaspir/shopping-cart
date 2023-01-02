import { Action } from "../../types";
import { ActionTypes } from "../../constants/actionTypes";
import State from "../state";

export const INIT_STATE: State = { isOpen: false };

const isCartOpenReducer = (state: State = INIT_STATE, action: Action) => {
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
