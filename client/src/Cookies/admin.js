import Cookies from "js-cookie";

const ADMIN_TOKEN = "admin_token";

export const login = (token) => {
  Cookies.set(ADMIN_TOKEN, token, { expires: 1 });
};

export const Logout = () => {
  Cookies.get(ADMIN_TOKEN) && Cookies.remove(ADMIN_TOKEN);
};

export const GetToken = () => {
  return Cookies.get(ADMIN_TOKEN);
};
