import * as api from "../../Apis/index";

export const GetSetupPasswordDataApi = async (accessToken, setters) => {
  setters.setLoading(true);
  setters.setError(false);
  setters.setErrorText("");

  const headerInfo = {};

  try {
    const response = await api.get(headerInfo, `/setupPassword/${accessToken}`);
    if (response.error) throw new Error(response.error);
    setters.setLoading(false);
    setters.setError(false);
    setters.setErrorText("");
    if (response.status && response.status !== "sucess")
      throw new Error("An error occured");
    setters.setEmail(response.decoded.data.email);
    setters.setToken(response.token);
  } catch (e) {
    console.log(e);
    setters.setLoading(false);
    setters.setError(true);
    setters.setErrorText(e.toString());
  }
};

export const AddPasswordApi = async (password, token, setters) => {
  const data = { password };

  setters.setLoading(true);
  setters.setError(false);
  setters.setErrorText("");

  const headerInfo = {};

  try {
    const response = await api.post(
      headerInfo,
      data,
      `/setupPassword/${token}`
    );
    if (response.error) throw new Error(response.error);
    setters.setLoading(false);
    setters.setError(false);
    setters.setErrorText("");
    if (!response.email)
      throw new Error(
        "Manager has not been added, kindly contact the POC manager"
      );
    return true;
  } catch (e) {
    console.log(e);
    setters.setLoading(false);
    setters.setError(true);
    setters.setErrorText(e.toString());
    return false;
  }
};
