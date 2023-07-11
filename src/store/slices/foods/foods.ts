import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FOODS_URL_API } from "../../../utils/constants";
import { TFoods, TInitialState } from "./types";

const initialState: TInitialState = {
  data: [],
  favouriteData:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("favouriteData") || "[]")
      : [],
  isLoading: false,
  error: "",
  selectedItem: {},
};

export const getData = createAsyncThunk(
  "foods/getData",
  async ({ selectedFilterId }: { selectedFilterId: number }) => {
    const filter =
      selectedFilterId === 0
        ? ""
        : selectedFilterId === 1
        ? `category=-1`
        : `category=${selectedFilterId}`;

    const response = await fetch(FOODS_URL_API + `?${filter}`);

    if (response.ok) {
      return await response.json();
    }
  }
);

const foodsSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    setSelectedItem(state, { payload }) {
      state.selectedItem = payload;
    },
    addItemFavouriteData(state, { payload }: PayloadAction<TFoods>) {
      if (localStorage.getItem("isLoggedIn") === "true") {
        state.favouriteData.push(payload);
        localStorage.setItem(
          "favouriteData",
          JSON.stringify(state.favouriteData)
        );
      } else {
        alert("С начала зарегистрируйтесь на сайте");
      }
    },
    removeItemFavouriteData(state, { payload }: PayloadAction<string>) {
      state.favouriteData = state.favouriteData.filter(
        (item) => item.id !== payload
      );
      localStorage.setItem(
        "favouriteData",
        JSON.stringify(state.favouriteData)
      );
    },
    removeFavouriteData(state) {
      state.favouriteData = [];
      localStorage.removeItem("favouriteData");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.error = "Упс... Данные не загрузились.";
      state.isLoading = false;
    });
  },
});

export const foodsReducer = foodsSlice.reducer;
export const {
  setSelectedItem,
  addItemFavouriteData,
  removeItemFavouriteData,
  removeFavouriteData,
} = foodsSlice.actions;

export const selectFoodsState = (state: {
  foods: { data: TFoods[]; isLoading: boolean; error: string };
}) => state.foods;
export const selectFoodItem = (state: { foods: { selectedItem: TFoods } }) =>
  state.foods.selectedItem;
export const selectFavouriteData = (state: {
  foods: { favouriteData: TFoods[] };
}) => state.foods.favouriteData;
