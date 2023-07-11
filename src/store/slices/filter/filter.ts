import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedFilterId: 0,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSelectedFilterId(state, { payload }) {
      state.selectedFilterId = payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setSelectedFilterId } = filterSlice.actions;

export const selectFilter = (state: { filter: { selectedFilterId: number } }) =>
  state.filter.selectedFilterId;
