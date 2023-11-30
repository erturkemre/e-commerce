import {API} from "../../api/api";

export const SET_ROLES = "SET_ROLES";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

export const rolesActionCreator = () => (dispatch) => {  // thunk action creator for roles
  API.get("roles")
    .then((res) => {
      dispatch({ type: SET_ROLES, payload: res.data.reverse() });
    })
    .catch((err) => {
      console.error(err);
    });
};

export const fetchCategoriesAction = () => (dispatch) =>{
  API.get("categories")
    .then((res) => {
      console.log(res.data);
      dispatch({ type: SET_CATEGORIES, payload: res.data.reverse() });
    })
    .catch((err) => {
      console.error(err);
    });
};

export const setTheme = (theme) => {
  return { type: SET_THEME, payload: theme };
};

export const setLanguage = (language) => {
  return { type: SET_LANGUAGE, payload: language };
};
