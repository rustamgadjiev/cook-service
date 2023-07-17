import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phone: "",
  code: "",
  contentId: 0,
  warningText: "",
  isLoggedIn:
    typeof window !== "undefined" &&
    localStorage.getItem("isLoggedIn") === "true",
};

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setPhone(state, { payload }) {
      state.phone = payload;
    },
    setContentId(state, { payload }) {
      state.contentId = payload;
    },
    setWarningText(state, { payload }) {
      state.warningText = payload;
    },
    setLoggedIn(state, { payload }) {
      state.isLoggedIn = payload;
      localStorage.setItem("isLoggedIn", String(payload));
    },
  },
});

export const registrationReducer = registrationSlice.reducer;
export const { setPhone, setContentId, setWarningText, setLoggedIn } =
  registrationSlice.actions;

export const selectPhone = (state: { registration: { phone: string } }) =>
  state.registration.phone;
export const selectCode = (state: { registration: { code: string } }) =>
  state.registration.code;
export const selectContentId = (state: {
  registration: { contentId: number };
}) => state.registration.contentId;
export const selectWarningText = (state: {
  registration: { warningText: string };
}) => state.registration.warningText;
export const selectIsLoggedIn = (state: {
  registration: { isLoggedIn: boolean };
}) => state.registration.isLoggedIn;
