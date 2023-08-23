import { createSlice } from "@reduxjs/toolkit";

const wishlistItems =
  localStorage.getItem("wishlistItem") !== null ? JSON.parse(localStorage.getItem("wishlistItem")) : [];

const totalWishlist =
  localStorage.getItem("wishlistTotal") !== null ? JSON.parse(localStorage.getItem("wishlistTotal")) : 0;

const initialState = {
  wishlist: wishlistItems,
  totalWishlist: totalWishlist,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const newItem = action.payload;
      const exsitingItem = state.wishlist.find((i) => i._id == newItem._id);
      if (exsitingItem) {
        state.wishlist = state.wishlist.filter((item) => item._id !== exsitingItem._id);
        state.totalWishlist--;
        localStorage.setItem("wishlistItem", JSON.stringify(state.wishlist.map((item) => item)));
        localStorage.setItem("wishlistTotal", JSON.stringify(state.totalWishlist));
      } else {
        //         console.log("new item");
        state.wishlist.push({ ...newItem, w: true });
        state.totalWishlist++;
        localStorage.setItem("wishlistItem", JSON.stringify(state.wishlist.map((item) => item)));
        localStorage.setItem("wishlistTotal", JSON.stringify(state.totalWishlist));
      }
    },
  },
});

export const { addToWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
