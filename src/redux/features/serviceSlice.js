import { createSlice } from "@reduxjs/toolkit";
import getContractedServices from "../actions/getContractedSevices";

const serviceSlice = createSlice({
  name: "services",
  initialState: {
    contractedServices: [],

    error: "",
    loading: false,
  },
  reducers: {
    setServiceError: (state, action) => {
      state.error = "";
    },
  },
  extraReducers: {
    [getContractedServices.pending]: (state, action) => {
      state.loading = true;
    },
    [getContractedServices.fulfilled]: (state, action) => {
      state.loading = false;
      state.contractedServices = action.payload.map((service) => {
        const existingItem = action.meta.arg.find(
          (item) => item.id === service.id
        );

        if (!existingItem) {
          return { ...service, checked: false };
        }

        return { ...service, checked: existingItem.checked };
      });
    },
    [getContractedServices.rejected]: (state, action) => {
      // console.log(action.payload);
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

 export const { setServiceError } = serviceSlice.actions;

export default serviceSlice.reducer;
