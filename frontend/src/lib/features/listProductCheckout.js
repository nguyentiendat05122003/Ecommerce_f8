import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listProductCheckout: [],
};

export const productCheckoutSlice = createSlice({
  name: "productCheckout",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.listProductCheckout = action.payload;
    },
  },
});

export const { addProduct } = productCheckoutSlice.actions;
export const productCheckoutReducer = productCheckoutSlice.reducer;
