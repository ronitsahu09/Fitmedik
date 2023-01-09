import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const TOKEN = "token";

export const login = (token) => {
  Cookies.set(TOKEN, token, { expires: 2 });
};

export const logout = () => {
  const navigate = useNavigate();
  Cookies.get(TOKEN) && Cookies.remove(TOKEN);
  navigate("/login");
};

export const getToken = () => {
  if (!Cookies.get(TOKEN)) {
    logout();
    return null;
  }
  return Cookies.get(TOKEN);
};
