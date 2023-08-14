import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  loadding: true,
};

const orderSlice = createSlice({
  name: "order",
  initialState,

  reducers: {
    getAllorder: (state, action) => {
      state.products = action.payload;
      state.loadding = false;
    },
  },
});

export const { getAllorder } = orderSlice.actions;
export default orderSlice.reducer;
