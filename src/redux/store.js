import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import authSlice from "./slice/authSlice";
import { apiSlice } from "./api/apiSlice";
import productSlice from "./slice/productSlice";
import orderSlice from "./slice/orderSlice";
import wishlistSlice from "./slice/wishlistSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    user: authSlice,
    wishlist:wishlistSlice,
    allProducts: productSlice,
    allOrder: orderSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
