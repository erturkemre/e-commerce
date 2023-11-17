import { SET_USER, SET_USER_FETCH_STATES } from "../actions/userActions";
import { FETCH_STATES } from "./productReducer";

const user = {
  user: {
    name: "",
    email: "",
    role_id: "",
  },
  fetchState: FETCH_STATES.notFetched,
};

const userReducer = (state = user, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user:{...action.payload},
        fetchState: FETCH_STATES.fetched,
      };
    case SET_USER_FETCH_STATES:
      return {
        ...state,
        fetchState: action.payload,
      };  
    default:
      return state;
  }
};
export default userReducer;
