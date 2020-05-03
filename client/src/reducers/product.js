import {
  GET_PRODUCTS,
  PRODUCT_ERROR,
  ADD_PRODUCT,
  GET_PRODUCT,
  CLEAR_PRODUCT,
  PRODUCT_DELETED,
  FILE_SUCCESS,
  FILE_ERROR,
} from "../actions/types";

const initialState = {
  products: [],
  singleProduct: {},
  loading: true,
  filePath: "",
  fileName: "",
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
    case GET_PRODUCT:
      return {
        ...state,
        singleProduct: payload,
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
        singleProduct: null,
      };
    case PRODUCT_DELETED:
      return {
        ...state,
        products: state.products.filter((product) => product._id !== payload),
        loading: false,
      };

    case FILE_SUCCESS:
      return {
        ...state,
        filePath: payload.filePath,
        fileName: payload.fileName,
        loading: false,
      };
    case FILE_ERROR:
      return {
        ...state,
        filePath: "",
        fileName: "",
        loading: false,
      };
    default:
      return state;
  }
}
