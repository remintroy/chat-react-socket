import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  accessToken: null,
  error: false,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      const { data, accessToken } = action.payload;
      state.data = data;
      state.accessToken = accessToken;
    },
    logout: (state) => {
      state.data = null;
      state.accessToken = null;
      state.error = false;
      state.loading = false;
    },
  },
});

export const { logout, setUserData } = userSlice.actions;
export default userSlice.reducer;
export const selectCurrentUser = (state: any) => state.user.data;
export const selectCurrentToken = (state: any) => state.user.token;
