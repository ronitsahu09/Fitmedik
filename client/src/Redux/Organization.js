import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	organizationInfo: null,
};

const getOrganization = createAsyncThunk(
	"organization/getOrganization",
	async (token) => {
		try {
			const { data } = await axios.post(
				`${process.env.REACT_APP_API_URL}/organization/get_organization`,
				{},
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				}
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
	async (args) => {
		try {
			const { data } = await axios.post(
				`${process.env.REACT_APP_API_URL}/organization/create_action`,
				{ action: args.action },
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${args.token}`,
					},
				}
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
	async (args) => {
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_API_URL}/organization/update_action`,
				{ action: args.action },
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${args.token}`,
					},
				}
			);
			return { data: response.data };
		} catch (error) {
			console.log(error.message);
			return { data: null };
		}
	}
);

const destroyAction = createAsyncThunk(
	"organization/DestroyAction",
	async (args) => {
		try {
			const { data } = await axios.post(
				`${process.env.REACT_APP_API_URL}/organization/destroy_action`,
				{ actionId: args.actionId },
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${args.token}`,
					},
				}
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
