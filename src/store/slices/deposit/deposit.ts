import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deposit: typeof window !== "undefined" ? +(localStorage.getItem("deposit") || 0) : 0
};

const depositSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addDeposit(state, { payload }) {
      state.deposit += payload;
    },
  },
});

export const depositReducer = depositSlice.reducer;
export const { addDeposit } = depositSlice.actions;

export const selectDeposit = (state: { deposit: { deposit: number } }) => state.deposit.deposit;
