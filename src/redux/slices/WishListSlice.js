import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  wishList: [],
};

const wishList = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const existingProduct = state.wishList.find(
        (items) => items.id === action.payload.id
      );
      if (!existingProduct) {
        state.wishList.push(action.payload);
        toast.success(`${action.payload.name} Added in your Wishlist`); // toast message
      } else {
        toast("Product is already in your Wishlist"); // toast message
      }
    },
    removeFromWishList: (state, action) => {
      state.wishList = state.wishList.filter(
        (item) => item.id !== action.payload.id
      );
    },
    clearWishList: (state,action)=>{
      state.wishList= []
    }
  },
});

export const { addToWishList, addProducts, removeFromWishList, clearWishList } =
  wishList.actions;
export default wishList.reducer;
