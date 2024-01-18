export const ADD_CART_LIST = "ADD_CART_LIST";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const INCREASE_PRODUCT = "INCREASE_PRODUCT";
export const DECREASE_PRODUCT = "DECREASE_PRODUCT";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";



export const setCartList = (product) => {
    return {
      type: 'ADD_CART_LIST',
      payload: product,
    };
  };
export const increaseProduct = (product) => {
    return {
      type: 'INCREASE_PRODUCT',
      payload: product,
    };
  };
export const decreaseProduct = (product) => {
    return {
      type: 'DECREASE_PRODUCT',
      payload: product,
    };
  };
export const removeProduct = (product) => {
    return {
      type: 'REMOVE_PRODUCT',
      payload: product,
    };
}

export const setPayment = (payment) => {
    return {
        type: SET_PAYMENT,
        payload: payment,
    };
}
export const setAddress = (address) => {
    return {
        type: SET_ADDRESS,
        payload: address,
    };
}