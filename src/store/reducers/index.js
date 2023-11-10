import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import productReducer from "./productReducer";
import shoppingCartReducer from "./shoppingCartReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  globalReducer,
  productReducer,
  shoppingCartReducer,
  userReducer,
});

export default rootReducer;
