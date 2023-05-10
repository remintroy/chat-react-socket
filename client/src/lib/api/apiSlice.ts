import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout, setUserData } from "../redux/userSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080/auth/api/v1",
  credentials: "include",
  prepareHeaders(headers, api: any) {
    const token = api?.getState()?.user?.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args: any, apis: any, extraOptions: any) => {
  let result = await baseQuery(args, apis, extraOptions);
  if (result.error?.status === 403) {
    // gets new access token
    const refreshResult = await baseQuery("/refresh", apis, extraOptions);
    // check if the access token is present
    if (refreshResult.data) {
      const user = apis.getState().user.data;
      // set new token to redux
      apis.dispatch(setUserData({ data: user, ...refreshResult.data }));
      // retry first request
      result = await baseQuery(args, apis, extraOptions);
    } else {
      apis.dispatch(logout());
    }
  }
  return result;
};

const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (emailAndPassword) => ({
        url: "/login",
        method: "POST",
        body: emailAndPassword,
      }),
    }),
    signup: builder.mutation({
      query: (emailPasswordAndUserName) => ({
        url: "/signup",
        method: "POST",
        body: emailPasswordAndUserName,
      }),
    }),
    checkUserNameAvailability: builder.query({
      query: (userName) => `/check_username/${userName}`,
    }),
  }),
});

export const apiReducer = apiSlice.reducer;
export const apiReducerPath = apiSlice.reducerPath;
export const apiMiddleware = apiSlice.middleware;
export const { useLoginMutation, useSignupMutation, useCheckUserNameAvailabilityQuery } = apiSlice;
