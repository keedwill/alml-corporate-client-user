import { createSlice } from "@reduxjs/toolkit";
import support from "../actions/support";

const supportSlice = createSlice({
  name: "support",
  initialState: {
    success: false,
    error: "",
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [support.pending]: (state, action) => {
      state.loading = true;
    },
    [support.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    [support.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

// export const { setUser, logout } = supportSlice.actions;

export default supportSlice.reducer;
