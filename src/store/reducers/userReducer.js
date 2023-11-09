import { SET_USER } from "../actions/userActions";

const user = {
  user: {
    name: "",
    email: "",
    role_id: "",
  },
};

const userReducer = (state = user, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: {
          name: action.pyload.name,
          email: action.pyload.email,
          role_id: action.pyload.role_id,
        },
      };
    default:
      return state;
  }
};
export default userReducer;
