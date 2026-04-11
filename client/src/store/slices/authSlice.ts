import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    user: false,
  },
  reducers: {
    loggedIn(state) {
      state.isLogin = true;
    },
    loggedOut(state) {
      state.isLogin = false;
    },
  },
});

export const { loggedIn, loggedOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
