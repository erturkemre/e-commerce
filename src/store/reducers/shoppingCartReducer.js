import {
  ADD_CART_LIST,
  REMOVE_PRODUCT,
  INCREASE_PRODUCT,
  DECREASE_PRODUCT,
  SET_PAYMENT,
  SET_ADDRESS,
} from "../actions/shoppingCartAction";

const initialState = {
  cartList: [],
  payment: [],
  adresses: [],
};

const updateCart = (cartList, newProduct) => {
  const existingItem = cartList.find(
    (item) => item.product.id === newProduct.id
  );

  if (existingItem) {
    return cartList.map((item) =>
      item.product.id === newProduct.id
        ? { ...item, count: item.count + 1 }
        : item
    );
  } else {
    return [
      ...cartList,
      { count: 1, checked: true, product: { ...newProduct } },
    ];
  }
};

const increaseProductQuantity = (state, product) => {
  const updatedCart = state.cartList.map((item) =>
    item.product.id === product.product.id
      ? { ...item, count: item.count + 1 }
      : item
  );

  return { ...state, cartList: updatedCart };
};

const decreaseProductQuantity = (state, product) => {
  const updatedCart = state.cartList.map((item) => {
    if (item.product.id === product.product.id) {
      return item.count === 1
        ? { ...item, count: 1 }
        : { ...item, count: item.count - 1 };
    } else {
      return item;
    }
  });

  return { ...state, cartList: updatedCart };
};

const removeProductFromCart = (state, product) => {
  const updatedCart = state.cartList.filter(
    (item) => item.product.id !== product.product.id
  );

  return { ...state, cartList: updatedCart };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_LIST:
      return {
        ...state,
        cartList: updateCart(state.cartList, action.payload),
      };
    case INCREASE_PRODUCT:
      return increaseProductQuantity(state, action.payload);
    case DECREASE_PRODUCT:
      return decreaseProductQuantity(state, action.payload);
    case REMOVE_PRODUCT:
      return removeProductFromCart(state, action.payload);
    case SET_PAYMENT:
      return { ...state, payment: [...state.payment, action.payload] };
    case SET_ADDRESS:
      return { ...state, adresses:  [...state.adresses, action.payload]};
    default:
      return state;
  }
};

export default reducer;
