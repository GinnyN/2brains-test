export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

const login = (user) => ({ type: LOGIN, user });
const logout = () => ({ type: LOGOUT });

export { login, logout };