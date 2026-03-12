import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },
  reducers: {},
});

export const authReducer = authSlice.reducer;
