import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import cartSlice from "./features/cartSlice";
import contractSlice from "./features/contractSlice";
import proformaSlice from "./features/proformaSlice";
import serviceSlice from "./features/serviceSlice";
import supportSlice from "./features/supportSlice";
import uiSlice from "./features/uiSlice";


export default configureStore({
  reducer: {
    ui: uiSlice,
    support: supportSlice,
    proforma:proformaSlice,
    contract: contractSlice,
    service:serviceSlice,
    cart:cartSlice,
    auth:authSlice
  },
});
