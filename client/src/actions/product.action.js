import axios from "axios";
import { GET_PRODUCT, PRODUCT_ERROR } from "../constants/action";

export const getProducts = (slug) => async (dispatch) => {
  try {
    const res = await axios.get("/api/products", slug, {});
    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
      dispatch({
          type:PRODUCT_ERROR,
          payload:err
      })
  }
};
 