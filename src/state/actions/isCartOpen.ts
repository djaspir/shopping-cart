import { ActionTypes } from "../constants/actionTypes";
import { Action } from "../../types";

export const openCart = (): Action => ({ type: ActionTypes.OPEN_CART });
export const closeCart = (): Action => ({ type: ActionTypes.CLOSE_CART });
