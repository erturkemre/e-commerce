import { API } from "../../api/api";
import { FETCH_STATES } from "../reducers/productReducer";

export const SET_PRODUCT_LIST = "PRODUCT_LIST";
export const SET_TOTAL_PRODUCT_COUNT = "TOTAL_PRODUCT_COUNT";
export const SET_PAGE_COUNT = "PAGE_COUNT";
export const SET_ACTİVE_PAGE = "ACTİVE_PAGE";
export const CHANGE_FETCH_STATE = "CHANGE_FETCH_STATE";

export const fetchProductsAction = (category, filter,sort) => (dispatch) => {
  const queryParams = {
    category: category || '',
    filter: filter || '',
    sort: sort || ''
  };
  
  const query = new URLSearchParams(queryParams).toString();
  const endpoint = `products${query ? `?${query}` : ''}`;

  dispatch({ type: CHANGE_FETCH_STATE, payload: FETCH_STATES.fetching });
  API.get(endpoint)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: SET_PRODUCT_LIST, payload: res.data.products });
      dispatch({ type: SET_TOTAL_PRODUCT_COUNT, payload: res.data.total });
      dispatch({
        type: SET_PAGE_COUNT,
        payload: Math.floor(res.data.total / 25),
      });
      // dispatch({ type: SET_ACTİVE_PAGE, payload: 1 });
      dispatch({ type: CHANGE_FETCH_STATE, payload: FETCH_STATES.fetched });
    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: CHANGE_FETCH_STATE, payload: FETCH_STATES.fetchError });
    });
};

// export const productList = (products) => {
//     return {type: SET_PRODUCT_LIST, payload: products};
// }

// export const totalProductCount = (count) => {
//     return {type: SET_TOTAL_PRODUCT_COUNT, payload: count};
// }

// export const pageCount = (count) => {
//     return {type: SET_PAGE_COUNT, payload: count};
// }

// export const activePage = (count) => {
//     return {type: SET_ACTİVE_PAGE, payload: count};
// }

// export const fetchState = (state) => {
//     return {type: CHANGE_FETCH_STATE, payload: state};
// }
