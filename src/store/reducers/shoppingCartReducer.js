import {
  SET_CART_LIST,
  SET_PAYMENT,
  SET_ADDRESS,
} from "../actions/shoppingCartAction";

const initialState = {
  cart: [],
  payment: {},
  adress: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_LIST:
      return { ...state, cart: action.payload };
    case SET_PAYMENT:
      return { ...state, payment: action.payload };
    case SET_ADDRESS:
      return { ...state, adress: action.payload };
    default:
      return state;
  }
};

export default reducer;

