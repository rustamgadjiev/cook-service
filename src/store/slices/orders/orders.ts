import { createSlice } from "@reduxjs/toolkit";
import { TInitialState, TOrderList } from "./types";

const initialState: TInitialState = {
  orderList: [
    {
      id: 0,
      date: "8 апреля 2054",
      price: 4250,
      condition: 1,
      foods: [
        {
          imageUrl:
            "https://dodopizza-a.akamaihd.net/static/Img/Products/b33f34589fa74a3788f3981848084cf2_292x292.webp",
          price: 199 * 5,
          title: "Супермясной Додстер",
          id: "0",
          count: 5,
        },
        {
          imageUrl:
            "https://dodopizza-a.akamaihd.net/static/Img/Products/87b6d4ca8df7430497de8ceaac09203e_292x292.webp",
          price: 219 * 2,
          title: "Дэнвич чоризо барбекю",
          id: "1",
          count: 2,
        },
      ],
    },
    {
      id: 1,
      date: "9 апреля 2054",
      price: 5150,
      condition: 3,
      foods: [
        {
          imageUrl:
            "https://dodopizza-a.akamaihd.net/static/Img/Products/b33f34589fa74a3788f3981848084cf2_292x292.webp",
          price: 199,
          title: "Супермясной Додстер",
          id: "0",
          count: 1,
        },
      ],
    },
    {
      id: 2,
      date: "12 апреля 2054",
      price: 6000,
      condition: 2,
      foods: [
        {
          imageUrl:
            "https://dodopizza-a.akamaihd.net/static/Img/Products/b33f34589fa74a3788f3981848084cf2_292x292.webp",
          price: 199,
          title: "Супермясной Додстер",
          id: "0",
          count: 1,
        },
      ],
    },
    {
      id: 3,
      date: "18 июля 2023",
      price: 23500,
      condition: 1,
      foods: [
        {
          imageUrl:
            "https://dodopizza-a.akamaihd.net/static/Img/Products/b33f34589fa74a3788f3981848084cf2_292x292.webp",
          price: 199,
          title: "Супермясной Додстер",
          id: "0",
          count: 1,
        },
      ],
    },
  ],
  filterOrderList: [
    {
      id: 0,
      date: "8 апреля 2054",
      price: 4250,
      condition: 1,
      foods: [
        {
          imageUrl:
            "https://dodopizza-a.akamaihd.net/static/Img/Products/b33f34589fa74a3788f3981848084cf2_292x292.webp",
          price: 199,
          title: "Супермясной Додстер",
          id: "0",
          count: 1,
        },
      ],
    },
    {
      id: 1,
      date: "9 апреля 2054",
      price: 5150,
      condition: 3,
      foods: [
        {
          imageUrl:
            "https://dodopizza-a.akamaihd.net/static/Img/Products/b33f34589fa74a3788f3981848084cf2_292x292.webp",
          price: 199,
          title: "Супермясной Додстер",
          id: "0",
          count: 1,
        },
      ],
    },
    {
      id: 2,
      date: "12 апреля 2054",
      price: 6000,
      condition: 2,
      foods: [
        {
          imageUrl:
            "https://dodopizza-a.akamaihd.net/static/Img/Products/b33f34589fa74a3788f3981848084cf2_292x292.webp",
          price: 199,
          title: "Супермясной Додстер",
          id: "0",
          count: 1,
        },
      ],
    },
    {
      id: 3,
      date: "18 июля 2023",
      price: 23500,
      condition: 1,
      foods: [
        {
          imageUrl:
            "https://dodopizza-a.akamaihd.net/static/Img/Products/b33f34589fa74a3788f3981848084cf2_292x292.webp",
          price: 199,
          title: "Супермясной Додстер",
          id: "0",
          count: 1,
        },
      ],
    },
  ],
  selectedOrderFilterId: 0,
  totalPrice: 0,
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
  },
});

export const orderReducer = orderSlice.reducer;
export const { setSelectedOrderFilterId } = orderSlice.actions;

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
