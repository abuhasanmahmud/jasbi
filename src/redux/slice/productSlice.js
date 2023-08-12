import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loadding: true,
};

const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
    getAllProduct: (state, action) => {
      state.products = action.payload;
      state.loadding = false;
    },
  },
});

export const { getAllProduct } = productSlice.actions;
export default productSlice.reducer;
