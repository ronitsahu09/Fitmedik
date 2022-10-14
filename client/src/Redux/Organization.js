import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  organizationInfo: null,
};

const getOrganization = createAsyncThunk(
  "organization/getOrganization",
  async (formData) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/organization/get_organization`,
        formData
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
  },
});

export { getOrganization };
export default OrganizationSlice.reducer;
