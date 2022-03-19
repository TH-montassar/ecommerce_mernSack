import {
  ADD_PRODUCT,
  GET_PRODUCT,
  GET_PRODUCTS,
  PRODUCT_ERROR,
} from "../constants/action";

const initialState = {
  products: [],
  product: null,
  isLoading: false,
  error: {},
};
const ProductReducers = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        //*payload. 3ibara reponce mmta3 postman
        products: payload,
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: payload
      };

    case ADD_PRODUCT:
      return;
    case PRODUCT_ERROR:
      return {
        isLoading: false,
        products: [],
        product: null,
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};
export default ProductReducers;
