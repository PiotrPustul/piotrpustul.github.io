import { createSlice } from "@reduxjs/toolkit";

export const hamburgerSlice = createSlice({
  name: "hamburger",
  initialState: {
    open: false,
  },
  reducers: {
    toggleNav: (state) => {
      state.open = !state.open;
    },
  },
});

export const { toggleNav } = hamburgerSlice.actions;

export default hamburgerSlice.reducer;
