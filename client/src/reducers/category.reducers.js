import { ADD_CATEGORY, GET_CATEGORY } from "../constants/action";

const initialState = {
  categories: [],
  category: null,
  isLoading: false,
  error: {},
};
const CategoryReducers = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_CATEGORY:
      break;
    case ADD_CATEGORY:
      break;

    default:
     return state;
  }
};
export default CategoryReducers;
