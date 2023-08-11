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
    removeTocart: (state, action) => {
      // console.log("remove item id", action.payload);
      const removeItemId = action.payload;
      const removeItem = state.cartItems.find((item) => item._id == removeItemId);

      state.totalQuantity = state.totalQuantity - removeItem.quantity;
      state.cartItems = state.cartItems.filter((item) => item._id != removeItemId);
      state.totalAmount = state.cartItems.reduce((total, item) => {
        return total + Number(item.totalPrice);
      }, 0);
    },
    increaceQuantity: (state, action) => {
      const id = action.payload._id;
      const increaceItemQuantity = state.cartItems.find((item) => {
        if (item._id == id) {
          item.quantity++;
          state.totalQuantity++;
          state.totalAmount = state.cartItems.reduce((total, item) => {
            return total + Number(item.price) * Number(item.quantity);
          }, 0);
        }
      });
    },
    decreaceQuantity: (state, action) => {
      const id = action.payload._id;
      state.cartItems.find((item) => {
        if (item._id == id) {
          item.quantity--;
          state.totalQuantity--;
          state.totalAmount = state.cartItems.reduce((total, item) => {
            return total + Number(item.price) * Number(item.quantity);
          }, 0);
        }
      });
    },
  },
});

export const { addToCart, removeTocart, increaceQuantity, decreaceQuantity } = cartSlice.actions;
export default cartSlice;
