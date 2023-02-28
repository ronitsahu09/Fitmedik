import * as api from "../index";

export const GetTPEventsApi = async (token, setters) => {
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
    const response = await api.get(headerInfo, `/allPartnersOrg`);
    setters.setLoading(false);
    setters.setError(false);
    setters.setErrorText("");
    if (response.error) throw new Error(response.error);
    setters.setData(response.data);
  } catch (e) {
    console.log(e);
    setters.setLoading(false);
    setters.setError(true);
    setters.setErrorText(e.toString());
  }
};
