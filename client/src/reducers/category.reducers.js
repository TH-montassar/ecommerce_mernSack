import {
  ADD_CATEGORY,
  CATEGORY_ERROR,
  GET_CATEGORIES,
  GET_CATEGORY,
} from "../constants/action";

const initialState = {
  categories: [],
  category: null,
  isLoading: false,
  error: {},
};
const CategoryReducers = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_CATEGORIES:
      return {
        ...state,
        //*payload. 3ibara reponce mmta3 postman
        categories: payload,
      };
    case CATEGORY_ERROR:
      return {
        ...state,
        isLoading: false,
        categories: [],
        category: null,
        error: payload,
      };

    default:
      return state;
  }
};
export default CategoryReducers;
