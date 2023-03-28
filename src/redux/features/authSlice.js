import { createSlice } from "@reduxjs/toolkit";
import Login from '../actions/auth/login'


const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: "",
    loading: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      localStorage.clear();
      state.user = null;
    },
  },
  extraReducers: {
    [Login.pending]: (state, action) => {
      state.loading = true;
    },
    [Login.fulfilled]: (state, action) => {
      state.loading = false;

      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
    },
    [Login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    // [register.pending]: (state, action) => {
    //   state.loading = true;
    // },
    // [register.fulfilled]: (state, action) => {
    //   state.loading = false;
    // },
    // [register.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload.message;
    // },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
