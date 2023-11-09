import { PRODUCT_LİST, TOTAL_PRODUCT_COUNT , PAGE_COUNT,ACTİVE_PAGE, CHANGE_FETCH_STATE } from "../actions/productAction";

export const FETCH_STATE = {
    notFetched: 'NOT_FETCHED',
    fetching: 'FETCHING',
    fetched: 'FETCHED',
    fetchError: 'FETCH_ERROR',
};

const initialState = {
    productList:[],
    totalProductCount: 0,
    pageCount:0,
    activePage:0,
    fetchState: FETCH_STATE.notFetched,
};

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case PRODUCT_LİST:
            return {...state, productList:action.pyload};
        
        case TOTAL_PRODUCT_COUNT:
            return {...state, totalProductCount:action.pyload};
        case PAGE_COUNT:
            return {...state, pageCount:action.pyload};
        case ACTİVE_PAGE:
            return {...state, activePage:action.pyload};        
        case CHANGE_FETCH_STATE:
            return {...state, fetchState:action.pyload};        
        default:
            return state;
    }

}
export default reducer;