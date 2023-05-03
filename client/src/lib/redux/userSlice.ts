import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  error: false,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.data = action.payload;
    },
    clearUser: (state) => {
      state.data = null;
      state.error = false;
      state.loading = false;
    },
  },
});

export const { clearUser, setUserData } = userSlice.actions;
export default userSlice.reducer;
