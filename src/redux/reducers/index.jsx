import { combineReducers } from "redux";

import {
  featuredProductReducer,
  ProductReducer,
  selectedProductReducer,
} from "./ProductReducer";

export const reducers = combineReducers({
  allProducts: ProductReducer,
  product: selectedProductReducer,
  featuredProduct: featuredProductReducer,
});
