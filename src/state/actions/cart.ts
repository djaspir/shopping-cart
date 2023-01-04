import {
  ActionTypes,
  AddToCartAction,
  RemoveFromCartAction,
} from "../../types/actionTypes";
import { CartItems } from "../state";

export const addToCart = (products: CartItems): AddToCartAction => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: products,
  };
};

export const removeFromCart = (products: CartItems): RemoveFromCartAction => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: products,
  };
};
