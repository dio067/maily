import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { setUser } from "./slices/authSlice";
import { authApi } from "./apis/authApi";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: authApi.endpoints.fetchUser.matchFulfilled,
  effect: (action, listenerApi) => {
    console.log("matchFulfilled fired!", action.payload);

    if (action.payload === null) {
      listenerApi.dispatch(setUser(false));
    } else {
      listenerApi.dispatch(setUser(true));
    }
  },
});

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(listenerMiddleware.middleware);
  },
});

export { useFetchUserQuery } from "./apis/authApi";
export default store;
