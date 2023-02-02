import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GetAdminToken } from "../Cookies/admin";

const initialState = {
  organizationInfo: null,
};

const getOrganization = createAsyncThunk(
  "organization/getOrganization",
  async (formData) => {
    try {
      // const token = GetAdminToken();
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/organization/get_organization`,
        formData
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorization: `Bearer ${token}`,
        //   },
        // }
      );

      return { data };
    } catch (error) {
      console.log(error.message);
      return { data: null };
    }
  }
);

const createAction = createAsyncThunk(
  "organization/createAction",
  async (formData) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/organization/create_action`,
        { ...formData }
      );
      return { data };
    } catch (error) {
      console.log(error.message);
      return { data: null };
    }
  }
);

const updateAction = createAsyncThunk(
  "organization/updateAction",
  async (formData) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/organization/update_action`,
        { ...formData }
      );
      console.log(response);
      return { data: response.data };
    } catch (error) {
      console.log(error.message);
      return { data: null };
    }
  }
);
const destroyAction = createAsyncThunk(
  "organization/DestroyAction",
  async (formData) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/organization/destroy_action`,
        { ...formData }
      );
      return { data };
    } catch (error) {
      console.log(error.message);
      return { data: null };
    }
  }
);

const OrganizationSlice = createSlice({
  name: "organization",
  initialState,
  reducers: {},
  extraReducers: {
    [getOrganization.fulfilled]: (state, action) => {
      const { data } = action.payload;

      if (data) state.organizationInfo = data.organization;
      else state.organizationInfo = null;
    },
    [createAction.fulfilled]: (state, action) => {
      const { data } = action.payload;

      if (data) state.organizationInfo = data.organization;
      else state.organizationInfo = null;
    },
    [updateAction.fulfilled]: (state, action) => {
      const { data } = action.payload;

      if (data) state.organizationInfo = data.organization;
      else state.organizationInfo = null;
    },
    [destroyAction.fulfilled]: (state, action) => {
      const { data } = action.payload;

      if (data) state.organizationInfo = data.organization;
      else state.organizationInfo = null;
    },
  },
});

export { getOrganization, createAction, updateAction, destroyAction };
export default OrganizationSlice.reducer;
