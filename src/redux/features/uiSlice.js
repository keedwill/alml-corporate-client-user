import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showContract: false,
    showSideBar: true,
    showSingleProforma: false,
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
    showSingleProforma: (state, action) => {
      state.showSingleProforma = !state.showSingleProforma;
    },
  },
});

export const { showContract, showSideBar, showCart, showSingleProforma } =
  uiSlice.actions;

export default uiSlice.reducer;
