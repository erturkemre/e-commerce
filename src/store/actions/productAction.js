export const SET_PRODUCT_LIST = "PRODUCT_LIST";
export const SET_TOTAL_PRODUCT_COUNT = "TOTAL_PRODUCT_COUNT";
export const SET_PAGE_COUNT = "PAGE_COUNT";
export const SET_ACTİVE_PAGE = "ACTİVE_PAGE";
export const CHANGE_FETCH_STATE = "CHANGE_FETCH_STATE";

export const productList = (products) => {
    return {type: SET_PRODUCT_LIST, payload: products};
}

export const totalProductCount = (count) => {
    return {type: SET_TOTAL_PRODUCT_COUNT, payload: count};
}

export const pageCount = (count) => {
    return {type: SET_PAGE_COUNT, payload: count};
}

export const activePage = (count) => {
    return {type: SET_ACTİVE_PAGE, payload: count};
}

export const fetchState = (state) => {
    return {type: CHANGE_FETCH_STATE, payload: state};
}