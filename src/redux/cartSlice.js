import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      // console.log("action", action.payload);
      const newItem = action.payload;
      // console.log("cartItesm", state.cartItems);
      const existingItem = state.cartItems.find((item) => item._id == newItem._id);
      state.totalQuantity++;
      // console.log("existingitem", existingItem);

      if (!existingItem) {
        const item = {
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        };
        state.cartItems.push(item);
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.cartItems.reduce((total, item) => {
        return total + Number(item.totalPrice);
      }, 0);
    },
    removeTocart: (sate, action) => {
      const removeItemId = action.payload._id;
      sate.cartItems = sate.cartItems.filter((item) => item._id != removeItemId);
    },
  },
});

export const { addToCart, removeTocart } = cartSlice.actions;
export default cartSlice;
