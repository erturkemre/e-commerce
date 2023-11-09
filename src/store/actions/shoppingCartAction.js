export const SET_CART_LIST = "CART_LIST";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";

export const setCartList = (cartList) => {
    return {
        type: SET_CART_LIST,
        pyload: cartList,
    };
}

export const setPayment = (payment) => {
    return {
        type: SET_PAYMENT,
        pyload: payment,
    };
}
export const setAddress = (address) => {
    return {
        type: SET_ADDRESS,
        pyload: address,
    };
}