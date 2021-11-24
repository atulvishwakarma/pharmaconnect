import { ActionType } from "../constants/action-types";

const initialSatate = {
  products: [],
};
export const ProductReducer = (state = initialSatate, { type, paylod }) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      return { ...state, products: paylod };

    default:
      return state;
  }
};

export const selectedProductReducer = (
  state = initialSatate,
  { type, paylod }
) => {
  switch (type) {
    case ActionType.SELECTED_PRODUCT:
      return { ...state, ...paylod };
    default:
      return state;
  }
};

export const featuredProductReducer = (
  state = initialSatate,
  { type, paylod }
) => {
  switch (type) {
    case ActionType.SET_FEATURED_PRODUCTS:
      return { ...state, products: paylod };

    default:
      return state;
  }
};
