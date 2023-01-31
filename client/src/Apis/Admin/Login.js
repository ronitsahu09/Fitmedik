import * as api from "../../Apis/index";

export const Login = async (data, setters) => {
  setters.setLoading(true);
  setters.setError(false);
  setters.setErrorText("");
  setters.setIsOtp(false);
  try {
    const response = await api.post({}, data, "/admin");
    if (response.error) throw new Error(response.error);
    setters.setLoading(false);
    setters.setError(false);
    setters.setErrorText("");
    setters.setIsOtp(true);
  } catch (e) {
    setters.setLoading(false);
    setters.setError(true);
    setters.setErrorText(e.toString());
    setters.setIsOtp(false);
  }
};

export const VerifyOtp = async (otp, setters) => {
  const data = { userOtp: otp };
  setters.setLoading(true);
  setters.setError(false);
  setters.setErrorText("");

  try {
    const response = await api.post({}, data, "/admin/verifyOtp");
    setters.setLoading(false);
    setters.setError(false);
    setters.setErrorText("");
    if (response.error) throw new Error(response.error);
    if (response.status !== "verified") throw new Error("User not verified");
    setters.setAdminToken(response.accessToken);
    return response.accessToken;
  } catch (e) {
    setters.setLoading(false);
    setters.setError(true);
    setters.setErrorText(e.toString());

    return null;
  }
};
