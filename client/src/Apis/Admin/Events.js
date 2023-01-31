import * as api from "../../Apis/index";

export const GetTreatmentPartnerEventsApi = async (id, token, setters) => {
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
    const response = await api.get(headerInfo, `/getAllevents/${id}`);
    setters.setLoading(false);
    setters.setError(false);
    setters.setErrorText("");
    if (response.error) throw new Error(response.error);
    setters.setEvents(response.data);
  } catch (e) {
    console.log(e);
    setters.setLoading(false);
    setters.setError(true);
    setters.setErrorText(e.toString());
  }
};

export const AddTreatmentPartnerEventApi = async (id, token, data, setters) => {
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
    const response = await api.post(headerInfo, data, "/addEvent");
    setters.setLoading(false);
    setters.setError(false);
    setters.setErrorText("");
    if (response.error) throw new Error(response.error);
    GetTreatmentPartnerEventsApi(id, token, setters);
    console.log(response);
    return true;
  } catch (e) {
    console.log(e);
    setters.setLoading(false);
    setters.setError(true);
    setters.setErrorText(e.toString());
    return false;
  }
};

export const UpdateTreatmentPartnerEventApi = async (
  id,
  token,
  data,
  setters
) => {
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
    const response = await api.post(headerInfo, data, "/updateEvent");
    setters.setLoading(false);
    setters.setError(false);
    setters.setErrorText("");
    if (response.error) throw new Error(response.error);
    GetTreatmentPartnerEventsApi(id, token, setters);
    return true;
  } catch (e) {
    console.log(e);
    setters.setLoading(false);
    setters.setError(true);
    setters.setErrorText(e.toString());
    return false;
  }
};
