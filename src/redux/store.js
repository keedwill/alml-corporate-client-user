import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./features/uiSlice";

export default configureStore({
  reducer: {
    ui: uiSlice,
  },
});
