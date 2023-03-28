import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

const getSingleContract = createAsyncThunk(
  "contracts/getSingleContract",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getSingleContract();

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export default getSingleContract;
