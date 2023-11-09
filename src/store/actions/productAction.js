export const PRODUCT_LİST = "PRODUCT_LİST";
export const TOTAL_PRODUCT_COUNT = "TOTAL_PRODUCT_COUNT";
export const PAGE_COUNT = "PAGE_COUNT";
export const ACTİVE_PAGE = "ACTİVE_PAGE";
export const CHANGE_FETCH_STATE = "CHANGE_FETCH_STATE";

export const productList = (products) => {
    return {type: PRODUCT_LİST, pyload: products};
}

export const totalProductCount = (count) => {
    return {type: TOTAL_PRODUCT_COUNT, pyload: count};
}

export const pageCount = (count) => {
    return {type: PAGE_COUNT, pyload: count};
}

export const activePage = (count) => {
    return {type: ACTİVE_PAGE, pyload: count};
}

export const fetchState = (state) => {
    return {type: CHANGE_FETCH_STATE, pyload: state};
}