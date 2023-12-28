import {
  SET_PRODUCT_LIST,
  SET_TOTAL_PRODUCT_COUNT,
  SET_PAGE_COUNT,
  SET_ACTİVE_PAGE,
  CHANGE_FETCH_STATE,
} from "../actions/productAction";

export const FETCH_STATES = {
  notFetched: "NOT_FETCHED",
  fetching: "FETCHING",
  fetched: "FETCHED",
  fetchError: "FETCH_ERROR",
};

const initialState = {
  productList: [],
  totalProductCount: 0,
  pageCount: 0,
  activePage: 0,
  fetchState: FETCH_STATES.notFetched,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      return { ...state, productList: [...state.productList, ...action.payload]  };

    case SET_TOTAL_PRODUCT_COUNT:
      return { ...state, totalProductCount: action.payload };
    case SET_PAGE_COUNT:
      return { ...state, pageCount: action.payload };
    case SET_ACTİVE_PAGE:
      return { ...state, activePage: action.payload };
    case CHANGE_FETCH_STATE:
      return { ...state, fetchState: action.payload };
    default:
      return state;
  }
};
export default reducer;
