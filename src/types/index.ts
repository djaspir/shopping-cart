import { RootState } from "../state/store";
import { ActionTypes } from "../state/constants/actionTypes";

export type { RootState };

export type Action = {
  type: ActionTypes;
};

export type ProductType = {
  id: string;
  title: string;
  price: string;
  image: string;
};
