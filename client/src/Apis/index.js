import axios from "axios";

export const get = async (header, endpoint) => {
  try {
    if (navigator.onLine === false)
      throw new Error("Not connected to the internet");

    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}${endpoint}`,
      header
    );
    console.log(response);
    if (response.status === 200) return response.data;
    else throw new Error("An error occured");
  } catch (e) {
    throw e;
  }
};

export const post = async (header, data, endpoint) => {
  try {
    if (navigator.onLine === false)
      throw new Error("Not connected to the internet");
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}${endpoint}`,
      data,
      { headers: { "Content-Type": "application/json" } }
    );
    console.log(response);
    if (response.status === 200) return response.data;
    else throw new Error("An error occured");
  } catch (e) {
    throw e;
  }
};

export const put = async (header, data, endpoint) => {
  try {
    if (navigator.onLine === false)
      throw new Error("Not connected to the internet");

    const response = await axios.put(
      `${process.env.REACT_APP_BASE_URL}${endpoint}`,
      data,
      header
    );
    console.log(response);
    if (response.status === 200) return response.data;
    else throw new Error("An error occured");
  } catch (e) {
    throw e;
  }
};
