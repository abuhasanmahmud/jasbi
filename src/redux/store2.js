import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store2 = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store2;
