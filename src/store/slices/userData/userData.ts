import { createSlice } from "@reduxjs/toolkit";
import { TInitialState, TUserData } from "./types";

const initialState: TInitialState = {
  data:
    (typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("userData") || "{}")) ||
    {},
};

const userDataSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    deleteAccount(state) {
      state.data = {};
      localStorage.removeItem("userData");
    },
    editData(state, { payload }) {
      const updatedUserData = { ...state.data, ...payload };

      state.data = updatedUserData;
      localStorage.setItem("userData", JSON.stringify(state.data));
    },
  },
});

export const userDataReducer = userDataSlice.reducer;
export const { deleteAccount, editData } = userDataSlice.actions;

export const selectUserData = (state: { userData: { data: TUserData } }) =>
  state.userData.data;
