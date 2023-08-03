import { createSlice } from "@reduxjs/toolkit";
import { TAddressList, TInitialState } from "./types";

const initialState: TInitialState = {
  addressList:
    (typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("addressList") || "[]")) ||
    [],
  selectedAddressId: 0,
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    deleteAddress(state, { payload: id }) {
      state.addressList = state.addressList.filter((card) => card.id !== id);
      state.selectedAddressId = state.selectedAddressId === id ? state.addressList[0]?.id || 0 : 0;
      localStorage.setItem("addressList", JSON.stringify(state.addressList));
    },
    addAddress(state, { payload }) {
      state.addressList.push(payload);
      state.selectedAddressId = payload[0]?.id || 0;
      localStorage.setItem("addressList", JSON.stringify(state.addressList));
    },
    deleteAdresses(state) {
      state.addressList = [];
      localStorage.removeItem("addressList");
    },
    editAddress(state, { payload }) {
      const updatedAddress = { ...payload };

      state.addressList[
        state.addressList.findIndex((address) => address.id === payload.id)
      ] = updatedAddress;
      localStorage.setItem("addressList", JSON.stringify(state.addressList));
    },
    setSelectedAddressId(state, { payload: id }) {
      state.selectedAddressId = id;
    },
  },
});

export const addressReducer = addressSlice.reducer;
export const { deleteAddress, addAddress, editAddress, setSelectedAddressId, deleteAdresses } =
  addressSlice.actions;

export const selectAddressList = (state: {
  address: { addressList: TAddressList[] };
}) => state.address.addressList;
export const selectAddressId = (state: {
  address: { selectedAddressId: number };
}) => state.address.selectedAddressId;
