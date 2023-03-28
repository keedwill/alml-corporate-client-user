import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

const support = createAsyncThunk(
  "support",
  async (
    {
      emailValue: email,
      phoneValue: phone,
      noteValue: note,
      fullnameValue: fullname,
      toast,
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.support({ email, note, fullname, phone });

      toast.success("Complaint Sent Succesfully");

      return response.data;
    } catch (error) {
      
      toast.error(error.response.data.message);

      return rejectWithValue(error.response.data);
    }
  }
);

export default support;
