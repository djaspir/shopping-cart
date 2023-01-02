import { RootState } from "../state/store";
import { ActionTypes } from "../constants/actionTypes";

export type { RootState };

export type Action = {
  type: ActionTypes;
};

export type ProductType = {
  name: string;
  price: string;
  img: string;
};
