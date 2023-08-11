import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("cartItems") !== null ? JSON.parse(localStorage.getItem("cartItems")) : [];

const totalAmount =
  localStorage.getItem("totalAmount") !== null ? JSON.parse(localStorage.getItem("totalAmount")) : 0;

const totalQuantity =
  localStorage.getItem("totalQuantity") !== null ? JSON.parse(localStorage.getItem("totalQuantity")) : 0;

const setItemFunc = (item, totalAmount, totalQuantity) => {
  localStorage.setItem("cartItems", JSON.stringify(item));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};

const initialState = {
  cartItems: items,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,
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

      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
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
      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
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
      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },
    decreaceQuantity: (state, action) => {
      const id = action.payload._id;
      state.cartItems.find((item) => {
        if (item._id == id) {
          if (item.quantity != 1) {
            item.quantity--;
            state.totalQuantity--;
          }

          state.totalAmount = state.cartItems.reduce((total, item) => {
            return total + Number(item.price) * Number(item.quantity);
          }, 0);
        }
      });
      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },
  },
});

export const { addToCart, removeTocart, increaceQuantity, decreaceQuantity } = cartSlice.actions;
export default cartSlice;
