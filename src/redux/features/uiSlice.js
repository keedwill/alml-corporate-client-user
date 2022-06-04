import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showContract: false,
    showSideBar: true,

    showCart: false,
  },
  reducers: {
    showCart: (state, action) => {
      state.showCart = !state.showCart;
    },
    showContract: (state, action) => {
      state.showContract = !state.showContract;
    },
    showSideBar: (state, action) => {
      state.showSideBar = !state.showSideBar;
    },
  },
});

export const { showContract, showSideBar, showCart } = uiSlice.actions;

export default uiSlice.reducer;
