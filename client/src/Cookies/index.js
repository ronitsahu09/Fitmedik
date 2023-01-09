import Cookies from "js-cookie";
import { COOKIE_EXPIRY } from "../Utils/api-constants";

const TOKEN = "token";

export const LoginUser = (token) => {
  Cookies.set(TOKEN, token, { expires: COOKIE_EXPIRY });
};

export const LogoutUser = () => {
  Cookies.get(TOKEN) && Cookies.remove(TOKEN);
};

export const GetUserToken = () => {
  return Cookies.get(TOKEN);
};
