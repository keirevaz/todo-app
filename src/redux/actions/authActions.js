export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = (username, firstName, lastName) => {
  return {
    type: LOGIN,
    payload: { username, firstName, lastName },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
