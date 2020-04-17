import { GET_PRODUCTS, PRODUCT_ERROR, ADD_PRODUCT } from "../actions/types";

const initialState = {
  products: [],
  product: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [payload, ...state.products],
        loading: false,
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        products: null,
        loading: false,
      };
    default:
      return state;
  }
}
