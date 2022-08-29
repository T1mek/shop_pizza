import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    addRemove(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const {addItem,addRemove,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
