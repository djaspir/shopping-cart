import { CartItems, ProductState } from "../state/state";
// Define the action  types as constants  with string values
export enum ActionTypes {
  OPEN_CART = "OPEN_CART",
  CLOSE_CART = "CLOSE_CART",
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  SET_PRODUCT = "SET_PRODUCT",
}

export type Action = {
  type: ActionTypes;
};

// Define the action creators with the correct return types
export interface AddToCartAction {
  type: typeof ActionTypes.ADD_TO_CART;
  payload: CartItems;
}

export interface RemoveFromCartAction {
  type: typeof ActionTypes.REMOVE_FROM_CART;
  payload: CartItems;
}

export interface SetProduct {
  type: typeof ActionTypes.SET_PRODUCT;
  payload: ProductState;
}

// Create a type that represents all possible  action types
export type CartActionTypes = AddToCartAction | RemoveFromCartAction;

export type SetProductActionTypes = SetProduct;
