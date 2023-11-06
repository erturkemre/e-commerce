import { API } from "../../api/api";

export const SET_ROLES = "SET_ROLES";

export const fetchRolesActionCreator = () => (dispatch) => {
  API.get("roles")
    .then((res) => {
      dispatch({ type: SET_ROLES, payload: res.data.reverse() });
    })
    .catch((err) => {
      console.error(err);
    });
};
