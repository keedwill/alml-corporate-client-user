import { createSlice } from "@reduxjs/toolkit";
import getSingleContract from "../actions/getSingleContract";

const contractSlice = createSlice({
  name: "contract",
  initialState: {
    contract: {},
    error: "",
    loading: true,
  },
  reducers: {},
  extraReducers: {
    [getSingleContract.pending]: (state, action) => {
      state.loading = true;
    },
    [getSingleContract.fulfilled]: (state, action) => {
      state.loading = false;

      state.contract = action.payload;
    },
    [getSingleContract.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

// export const { setCurrentPage } = proformaSlice.actions;

export default contractSlice.reducer;
