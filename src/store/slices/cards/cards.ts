import { createSlice } from "@reduxjs/toolkit";
import { TCardList, TInitialState } from "./types";

const initialState: TInitialState = {
  cardList:
    (typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("cardList") || "[]")) ||
    [],
};

const cardsSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    deleteCard(state, { payload: id }) {
      state.cardList = state.cardList.filter((card) => card.id !== id);
      localStorage.setItem("cardList", JSON.stringify(state.cardList));
    },
    addCard(state, { payload }) {
      state.cardList.push(payload);
      localStorage.setItem("cardList", JSON.stringify(state.cardList));
    },
  },
});

export const cardsReducer = cardsSlice.reducer;
export const { deleteCard, addCard } = cardsSlice.actions;

export const selectCardList = (state: { cards: { cardList: TCardList[] } }) =>
  state.cards.cardList;
