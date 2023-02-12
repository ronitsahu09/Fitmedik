import Cookies from "js-cookie";
import { COOKIE_EXPIRY } from "../Utils/api-constants";

const ADMIN_TOKEN = "admin_token";

export const LoginAdmin = (token) => {
  Cookies.set(ADMIN_TOKEN, token, { expires: COOKIE_EXPIRY });
};

export const LogoutAdmin = () => {
  Cookies.get(ADMIN_TOKEN) && Cookies.remove(ADMIN_TOKEN);
  window.location.reload(false);
};

export const GetAdminToken = () => {
  return Cookies.get(ADMIN_TOKEN);
};
