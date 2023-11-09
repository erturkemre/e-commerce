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

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_LIST:
      return { ...state, cart: action.pyload };
    case SET_PAYMENT:
      return { ...state, payment: action.pyload };
    case SET_ADDRESS:
      return { ...state, adress: action.pyload };
    default:
      return state;
  }
};


