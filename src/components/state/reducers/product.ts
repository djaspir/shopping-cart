import { ProductState } from "../state";
import { SetProductActionTypes, ActionTypes } from "../../../types/actionTypes";

const initialState: ProductState = [];

const productReducer = (
  state = initialState,
  action: SetProductActionTypes
): ProductState => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCT:
      return [...action.payload];
    default:
      return state;
  }
};

export default productReducer;
