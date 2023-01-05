import { ActionTypes, SetProduct } from "../../../types/actionTypes";
import { ProductState } from "../state";

export const setProducts = (product: ProductState): SetProduct => {
  return {
    type: ActionTypes.SET_PRODUCT,
    payload: product,
  };
};
