import { createSlice } from "@reduxjs/toolkit";
import { TAddressList, TInitialState } from "./types";

const initialState: TInitialState = {
  addressList:
    (typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("addressList") || "[]")) ||
    [],
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    deleteAddress(state, { payload: id }) {
      state.addressList = state.addressList.filter((card) => card.id !== id);
      localStorage.setItem("addressList", JSON.stringify(state.addressList));
    },
    addAddress(state, { payload }) {
      state.addressList.push(payload);
      localStorage.setItem("addressList", JSON.stringify(state.addressList));
    },
    editAddress(state, { payload }) {
      const updatedAddress = { ...payload };

      state.addressList[
        state.addressList.findIndex((address) => address.id === payload.id)
      ] = updatedAddress;
      localStorage.setItem("addressList", JSON.stringify(state.addressList));
    },
  },
});

export const addressReducer = addressSlice.reducer;
export const { deleteAddress, addAddress, editAddress } = addressSlice.actions;

export const selectAddressList = (state: {
  address: { addressList: TAddressList[] };
}) => state.address.addressList;
