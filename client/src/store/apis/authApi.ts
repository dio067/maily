import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints(builder) {
    return {
      fetchUser: builder.query({
        query: () => {
          return `current_user`;
        },
      }),
    };
  },
});

export const { useFetchUserQuery } = authApi;
