import isCartOpenReducer from "./isCartOpen";
import cartReducer from "./cart";
import productReducer from "./product";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  isCartOpen: isCartOpenReducer,
  cart: cartReducer,
  products: productReducer,
});

export default rootReducer;
