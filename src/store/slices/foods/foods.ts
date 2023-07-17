import { createSlice } from "@reduxjs/toolkit";
import { TFoods, TInitialState } from "./types";

const initialState: TInitialState = {
  selectedItem: {},
};

const foodsSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    setSelectedItem(state, { payload }) {
      state.selectedItem = payload;
    },
  },
});

export const foodsReducer = foodsSlice.reducer;
export const { setSelectedItem } = foodsSlice.actions;

export const selectFoodItem = (state: { foods: { selectedItem: TFoods } }) =>
  state.foods.selectedItem;
