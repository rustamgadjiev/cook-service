import { createSlice } from "@reduxjs/toolkit";
import { TInitialState, TOrderList } from "./types";
import { paymentList, timeList } from "@/utils/app-data";

const initialState: TInitialState = {
  orderList:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("orderList") || "[]")
      : [],
  filterOrderList:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("orderList") || "[]")
      : [],
  selectedOrderFilterId: 0,
  totalPrice: 0,
  selectedTimeId: timeList[0],
  selectedPaymentId: paymentList[0].title as string,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setSelectedOrderFilterId(state, { payload }) {
      state.selectedOrderFilterId = payload;

      if (payload !== 0) {
        state.filterOrderList = state.orderList.filter(
          (item: TOrderList) => item.condition === payload
        );
      } else {
        state.filterOrderList = state.orderList;
      }
    },
    setSelectedTimeId(state, { payload }) {
      state.selectedTimeId = payload;
    },
    setSelectedPaymentId(state, { payload }) {
      state.selectedPaymentId = payload;
    },
    addOrder(state, { payload }) {
      state.orderList.push(payload);
      state.filterOrderList.push(payload);
      localStorage.setItem("orderList", JSON.stringify(state.orderList));
    },
    deleteOrders(state) {
      state.orderList = [];
      state.filterOrderList = [];
      localStorage.removeItem("orderList");
    },
    editCondition(state, { payload }) {
      state.orderList[
        state.orderList.findIndex((order) => order.id === payload.id)
      ].condition = payload.condition;
      state.filterOrderList[
        state.filterOrderList.findIndex((order) => order.id === payload.id)
      ].condition = payload.condition;
      localStorage.setItem("orderList", JSON.stringify(state.orderList));
    },
  },
});

export const orderReducer = orderSlice.reducer;
export const {
  setSelectedOrderFilterId,
  setSelectedTimeId,
  setSelectedPaymentId,
  addOrder,
  editCondition,
  deleteOrders,
} = orderSlice.actions;

export const selectFilterOrderList = (state: {
  orders: { filterOrderList: TOrderList[] };
}) => state.orders.filterOrderList;
export const selectOrderList = (state: {
  orders: { orderList: TOrderList[] };
}) => state.orders.orderList;
export const selectOrderFilterId = (state: {
  orders: { selectedOrderFilterId: number };
}) => state.orders.selectedOrderFilterId;
export const selectTotalPrice = (state: { orders: { totalPrice: number } }) =>
  state.orders.totalPrice;
export const selectTimeId = (state: { orders: { selectedTimeId: string } }) =>
  state.orders.selectedTimeId;
export const selectPaymentId = (state: {
  orders: { selectedPaymentId: string };
}) => state.orders.selectedPaymentId;
