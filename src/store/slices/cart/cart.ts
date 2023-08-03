import { createSlice } from "@reduxjs/toolkit";
import { TCartItem, TState } from "./types";

const initialState: TState = {
  cartList:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cartList") || "[]")
      : [],
  totalPrice:
    typeof window !== "undefined"
      ? +(localStorage.getItem("totalPrice") || 0)
      : 0,
  totalCount:
    typeof window !== "undefined"
      ? +(localStorage.getItem("totalCount") || 0)
      : 0,
  deliveryPrice:
    typeof window !== "undefined"
      ? +(localStorage.getItem("deliveryPrice") || 0)
      : 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, { payload: { newCartItem } }) {
      const findItem = state.cartList.find(
        (obj) =>
          obj.id === newCartItem.id &&
          obj.mores.join("") === newCartItem.mores.join("")
      );

      if (findItem) {
        const initialPrice = findItem.price / findItem.count;

        findItem.count += newCartItem.count;
        findItem.price = initialPrice * findItem.count;
      } else {
        state.cartList.push({
          ...newCartItem,
        });
      }

      state.totalPrice = state.cartList.reduce((a, b) => a + b.price, 0);
      state.totalCount = state.cartList.reduce((a, b) => a + b.count, 0);

      if (state.totalPrice >= 5000) {
        state.deliveryPrice = 0;
      } else {
        state.deliveryPrice = Math.round(state.totalPrice * 0.1);
      }

      localStorage.setItem("cartList", JSON.stringify(state.cartList));
      localStorage.setItem("totalPrice", String(state.totalPrice));
      localStorage.setItem("totalCount", String(state.totalCount));
      localStorage.setItem("deliveryPrice", String(state.deliveryPrice));
    },
    removeProducts(state) {
      state.cartList = [];
      state.totalPrice = 0;
      state.totalCount = 0;
      state.deliveryPrice = 0;
      localStorage.removeItem("cartList");
      localStorage.removeItem("totalPrice");
      localStorage.removeItem("totalCount");
      localStorage.removeItem("deliveryPrice");
    },
    incrementCount(state, { payload }) {
      const findItem = state.cartList.find(
        (obj) =>
          obj.id === payload.id && obj.mores.join("") === payload.mores.join("")
      );

      if (findItem) {
        const initialPrice = findItem.price / findItem.count;

        findItem.count++;
        findItem.price += initialPrice;
      }

      state.totalPrice = state.cartList.reduce((a, b) => a + b.price, 0);
      state.totalCount = state.cartList.reduce((a, b) => a + b.count, 0);

      if (state.totalPrice >= 5000) {
        state.deliveryPrice = 0;
      } else {
        state.deliveryPrice = Math.round(state.totalPrice * 0.1);
      }

      localStorage.setItem("cartList", JSON.stringify(state.cartList));
      localStorage.setItem("totalPrice", String(state.totalPrice));
      localStorage.setItem("totalCount", String(state.totalCount));
      localStorage.setItem("deliveryPrice", String(state.deliveryPrice));
    },
    decrementCount(state, { payload }) {
      const findItem = state.cartList.find(
        (obj) =>
          obj.id === payload.id && obj.mores.join("") === payload.mores.join("")
      );

      if (findItem) {
        const initialPrice = findItem.price / findItem.count;

        findItem.count--;
        findItem.price -= initialPrice;
      }

      if (findItem?.count === 0) {
        state.cartList = state.cartList.filter(
          (item) =>
            item.id !== findItem.id ||
            item.mores.join("") !== payload.mores.join("")
        );
      }

      state.totalPrice = state.cartList.reduce((a, b) => a + b.price, 0);
      state.totalCount = state.cartList.reduce((a, b) => a + b.count, 0);

      if (state.totalPrice >= 5000) {
        state.deliveryPrice = 0;
      } else {
        state.deliveryPrice = Math.round(state.totalPrice * 0.1);
      }

      localStorage.setItem("cartList", JSON.stringify(state.cartList));
      localStorage.setItem("totalPrice", String(state.totalPrice));
      localStorage.setItem("totalCount", String(state.totalCount));
      localStorage.setItem("deliveryPrice", String(state.deliveryPrice));
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addProduct, incrementCount, decrementCount, removeProducts } =
  cartSlice.actions;

export const selectCartList = (state: { cart: { cartList: TCartItem[] } }) =>
  state.cart.cartList;
export const selectTotalPrice = (state: { cart: { totalPrice: number } }) =>
  state.cart.totalPrice;
export const selectTotalCount = (state: { cart: { totalCount: number } }) =>
  state.cart.totalCount;
export const selectDeliveryPrice = (state: {
  cart: { deliveryPrice: number };
}) => state.cart.deliveryPrice;
