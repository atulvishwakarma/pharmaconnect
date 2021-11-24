import { ActionType } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionType.SET_PRODUCTS,
    paylod: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionType.SELECTED_PRODUCT,
    paylod: product,
  };
};

export const setFeaturedProducts = (products) => {
  return {
    type: ActionType.SET_FEATURED_PRODUCTS,
    paylod: products,
  };
};
