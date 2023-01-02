import rootReducer from "./reducers";
import { createStore } from "redux";

declare const __REDUX_DEVTOOLS_EXTENSION__: any;

export type RootState = ReturnType<typeof store.getState>;

const store = createStore(
  rootReducer,
  __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
