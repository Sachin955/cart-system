import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      const existingProduct = state.cart.find(
        (items) => items.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
        existingProduct.price = action.payload.price;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCartItem: (state, action) => {
      const confirmed = window.confirm(
        "Are you sure you want to remove this item?"
      );
      if (confirmed === true) {
        state.cart = state.cart.filter(
          (items) => items.id !== action.payload.id
        );
      }
    },
    incrementQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (items) => items.id === action.payload.id
      );
      existingProduct.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (items) => items.id === action.payload.id
      );
      if (existingProduct.quantity >= 1) {
        existingProduct.quantity = existingProduct.quantity - 1;
      } else {
        state.cart = state.cart.filter(
          (items) => items.id !== action.payload.id
        );
      }
    },
    clearCart:(state,action)=>{
      state.cart=[]
    }
  },
});
export const {
  addProducts,
  removeCartItem,
  incrementQuantity,
  decrementQuantity,
  clearCart
} = cartSlice.actions;
export default cartSlice.reducer;
