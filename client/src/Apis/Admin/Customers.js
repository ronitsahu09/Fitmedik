import * as api from "../../Apis/index";

export const GetAllCustomersApi = async (token, setters) => {
  setters.setLoading(true);
  setters.setError(false);
  setters.setErrorText("");

  const headerInfo = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await api.get(headerInfo, "/organization");
    if (response.error) throw new Error(response.error);
    setters.setLoading(false);
    setters.setError(false);
    setters.setErrorText("");
    if (response.error) throw new Error(response.error);
    setters.setCustomers(response);
  } catch (e) {
    console.log(e);
    setters.setLoading(false);
    setters.setError(true);
    setters.setErrorText(e.toString());
  }
};

export const AddCustomer = async (otp, setters) => {
  const data = { userOtp: otp };
  setters.setLoading(true);
  setters.setError(false);
  setters.setErrorText("");

  try {
    if (navigator.onLine === false)
      throw new Error("Not connected to the internet");
    const response = await api.post({}, data, "/admin/verifyOtp");
    setters.setLoading(false);
    setters.setError(false);
    setters.setErrorText("");
    console.log(response);

    if (response.error) throw new Error(response.error);

    return response.status === "verified";
  } catch (e) {
    setters.setLoading(false);
    setters.setError(true);
    setters.setErrorText(e.toString());

    return false;
  }
};
