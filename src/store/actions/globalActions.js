export const SET_ROLES = "SET_ROLES";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

export const setRoles = (roles) => {
  return {
    type: SET_ROLES,
    pyload: roles,
  };
};

export const setCategories = (categories) => {
  return { type: SET_CATEGORIES, pyload: categories };
};

export const setTheme = (theme) => {
  return { type: SET_THEME, pyload: theme };
};

export const setLanguage = (language) => {
  return { type: SET_LANGUAGE, pyload: language };
};
