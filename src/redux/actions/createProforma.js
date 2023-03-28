import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

const createProforma = createAsyncThunk(
  "proforma/create",
  async (
    {
      data,

      navigate,
      toast,
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.createProforma(data);

      toast.success("Proforma Created Succesfully");
      navigate("/dashboard");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export default createProforma;
