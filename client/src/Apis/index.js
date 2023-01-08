import axios from "axios";

export const get = async (header, endpoint) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/${endpoint}`,
      header
    );
    if (response.status === 200) return { status: true, data: response.data };
    else
      return {
        status: false,
        message: response.data || response.data.message || "An error occured",
      };
  } catch (e) {
    return {
      status: false,
      message: e.response || e.response.data || "An error occured",
    };
  }
};

export const post = async (header, data, endpoint) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/${endpoint}`,
      data,
      header
    );
    if (response.status === 200) return { status: true, data: response.data };
    else
      return {
        status: false,
        message: response.data || response.data.message || "An error occured",
      };
  } catch (e) {
    return {
      status: false,
      message: e.response || e.response.data || "An error occured",
    };
  }
};

export const put = async (header, data, endpoint) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_BASE_URL}/${endpoint}`,
      data,
      header
    );
    if (response.status === 200) return { status: true, data: response.data };
    else
      return {
        status: false,
        message: response.data || response.data.message || "An error occured",
      };
  } catch (e) {
    return {
      status: false,
      message: e.response || e.response.data || "An error occured",
    };
  }
};
