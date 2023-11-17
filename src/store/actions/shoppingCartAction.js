export const SET_CART_LIST = "SET_CART_LIST";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";

export const setCartList = (cartList) => {
    return {
        type: SET_CART_LIST,
        payload: cartList,
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