import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

const getContractedServices = createAsyncThunk(
  "services/getContractedServices",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getContractedServices();

      return response.data;
    } catch (error) {
      //  console.log(error.response.data)
      return rejectWithValue(
        error.response.data === undefined
          ? { message: "SERVER ERROR" }
          : error.response.data
      );
    }
  }
);

export default getContractedServices;
