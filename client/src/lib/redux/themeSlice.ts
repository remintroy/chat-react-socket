import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
  error: false,
  loading: false,
};

const themeSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsDark: (state, action) => {
      state.isDark = action.payload;
    },
    clearTheme: (state) => {
      state.isDark = false;
      state.error = false;
      state.loading = false;
    },
  },
});

export const { clearTheme, setIsDark } = themeSlice.actions;
export default themeSlice.reducer;
