
import { ADD_PRODUCT, GET_PRODUCT } from "../constants/action";

const initialState = {
  products: [],
  product: null,
  isLoading: false,
  error: {},
};
const ProductReducers = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_PRODUCT:
      return {
        ...state,
        //*payload. 3ibara reponce mmta3 postman
        products: payload,
      };
    case ADD_PRODUCT:
      return;

    default:
      return state;
  }
};
export default ProductReducers;
