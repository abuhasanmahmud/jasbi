import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: {},
  loadding: true,
};

const orderSlice = createSlice({
  name: "order",
  initialState,

  reducers: {
    getAllorder: (state, action) => {
      // console.log("action in order slice", action.payload);
      state.orders = action.payload;
      state.loadding = false;
    },
  },
});

export const { getAllorder } = orderSlice.actions;
export default orderSlice.reducer;
