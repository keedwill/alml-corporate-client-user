import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

const getSingleProforma = createAsyncThunk(
  "proformas/getSingleProforma",
  async (id, { rejectWithValue }) => {
    try {
     console.log(id);
      const response = await api.getSingleProforma(id);
 
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export default getSingleProforma;
