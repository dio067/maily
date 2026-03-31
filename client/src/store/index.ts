import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/authApi";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
});

export { useFetchUserQuery } from "./apis/authApi";
export default store;
