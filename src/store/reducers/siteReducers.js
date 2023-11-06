import { SET_ROLES } from "../actions/globalAction";

const siteInitial = {
  roles: [],
};

export const siteReducer = (state = siteInitial, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ROLES:
      return { ...state, roles: payload };
    default:
      return state;
  }
};
