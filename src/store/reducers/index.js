import { combineReducers } from "redux";
import { siteReducer } from "./siteReducer";

export const reducers = combineReducers({
  site: siteReducer,
});
