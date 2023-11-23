import { API, renewAPI } from "../../api/api";
import { toast } from "react-toastify";
import { FETCH_STATES } from "../reducers/productReducer";

export const SET_USER = "SET_USER";
export const SET_USER_FETCH_STATES = "SET_USER_FETCH_STATES";

export const userActionsCreator = (data) => (dispatch, getState) => {
  try {
    if (getState().userReducer.fetchState === FETCH_STATES.notFetched) {
      dispatch({ type: SET_USER_FETCH_STATES, payload: FETCH_STATES.fetching });
      API.post("login", data).then((res) => {
        console.log("SET_USER dispatch:", res.data);
        dispatch({ type: SET_USER, payload: res.data });
        console.log(res.data);
        dispatch({
          type: SET_USER_FETCH_STATES,
          payload: FETCH_STATES.fetched,
        });
        renewAPI(res.data.token);
        toast.success(res.data.message);
      });
      toast.success("Giriş başarılı.");
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      toast.warning("Email veya şifre hatalı.");
    } else {
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
    dispatch({
      type: SET_USER_FETCH_STATES,
      payload: FETCH_STATES.fetchError,
    });
  }
};

export const getUserVerify = () => (dispatch) => {
  API.get("verify")
    .then((res) => {
      console.log("getUserVerify dispatch:", res.data);
      dispatch({ type: SET_USER, payload: res.data });
      dispatch({
        type: SET_USER_FETCH_STATES,
        payload: FETCH_STATES.fetched,
      });
      renewAPI(res.data.token);
      toast.success(res.data.message);
    })
    .catch((error) => {
      console.log(error);
      localStorage.removeItem("token");
      dispatch({
        type: SET_USER_FETCH_STATES,
        payload: FETCH_STATES.fetchError,
      });
      renewAPI();
    });
};
