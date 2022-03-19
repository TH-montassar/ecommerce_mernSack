import axios from "axios";
import { CATEGORY_ERROR, GET_CATEGORIES } from "../constants/action";
export const getCategories = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/categories`);

    dispatch({
      type: GET_CATEGORIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: err,
    });
  }
};
