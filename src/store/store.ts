import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./slices/filter/filter";
import { registrationReducer } from "./slices/registration/registration";
import { foodsReducer } from "./slices/foods/foods";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { orderReducer } from "./slices/orders/orders";
import { cardsReducer } from "./slices/cards/cards";
import { addressReducer } from "./slices/address/address";
import { userDataReducer } from "./slices/userData/userData";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    registration: registrationReducer,
    foods: foodsReducer,
    orders: orderReducer,
    cards: cardsReducer,
    address: addressReducer,
    userData: userDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
