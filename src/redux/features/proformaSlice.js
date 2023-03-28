import { createSlice } from "@reduxjs/toolkit";
import createProforma from "../actions/createProforma";
import getProformas from "../actions/getProformas";
import getSingleProforma from "../actions/getSingleProforma";

const proformaSlice = createSlice({
  name: "proformas",
  initialState: {
    proforma: {},
    proformas: [],
    currentPage: 0,
    noOfPages: null,
    error: "",
    loading: false,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [getProformas.pending]: (state, action) => {
      state.loading = true;
    },
    [getProformas.fulfilled]: (state, action) => {
      state.loading = false;
      state.proformas = action.payload.data;
      state.noOfPages = action.payload.totalPages;
      state.currentPage = action.payload.currentPage;
    },
    [getProformas.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getSingleProforma.pending]: (state, action) => {
      state.loading = true;
    },
    [getSingleProforma.fulfilled]: (state, action) => {
      state.loading = false;

      state.proforma = action.payload;
    },
    [getSingleProforma.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [createProforma.pending]: (state, action) => {
      state.loading = true;
    },
    [createProforma.fulfilled]: (state, action) => {
      state.loading = false;

      state.proforma = action.payload;
    },
    [createProforma.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { setCurrentPage } = proformaSlice.actions;

export default proformaSlice.reducer;
