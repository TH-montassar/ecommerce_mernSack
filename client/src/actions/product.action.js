import axios from "axios";
import { GET_PRODUCTS, GET_PRODUCT, PRODUCT_ERROR } from "../constants/action";

export const getProducts = (queries) => async (dispatch) => {
  //ta3me concatination mta3 query elli da5elneh
  let queryString = "?";
  for (const key in queries) {
    queryString += key + "=" + queries[key] + "&";
    //* ? limit =8
  }
  console.log("form product action  " + queryString);

  try {
    const res = await axios.get(`/api/products${queryString}`, {});
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: err,
    });
  }
};
export const getProduct = (slug) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/products/${slug}`, {});
    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: err,
    });
  }
};
