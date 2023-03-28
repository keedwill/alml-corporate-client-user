import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

const getProformas = createAsyncThunk(
  "proformas/getProformas",
  async (page, { rejectWithValue }) => {
    try {
      const response = await api.getProformas(page);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export default getProformas;
