import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/authApi";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(authApi.middleware);
  },
});

export { useFetchUserQuery } from "./apis/authApi";
export default store;
