import * as api from "../index";

export const GetOrganizationApi = async (token, setters) => {
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
    const response = await api.get(headerInfo, `/organizationDetails`);
    setters.setLoading(false);
    setters.setError(false);
    setters.setErrorText("");
    console.log(response);
    if (response.error) throw new Error(response.error);
    // setters.setData(response);
    setters.setHospitalDetails(response);
    setters.setManagerDetails(response.hospital_manager);
    setters.setOpdtDetails(response.operational_details);
  } catch (e) {
    console.log(e);
    setters.setLoading(false);
    setters.setError(true);
    setters.setErrorText(e.toString());
  }
};
