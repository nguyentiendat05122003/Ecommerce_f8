import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // listProduct: JSON.parse(localStorage?.getItem("listProductCompare"))
  //   ? JSON.parse(localStorage?.getItem("listProductCompare"))
  //   : [{}, {}, {}],
  // listProduct: [{}, {}, {}],
};

export const listProductCompareSlice = createSlice({
  name: "listProductCompare",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      let nonEmptyItems = state.listProduct.filter(
        (item) => Object.keys(item).length > 0
      );
      let newList = [...nonEmptyItems, action.payload];
      if (newList.length > 3) {
        newList.shift();
      }
      while (newList.length < 3) {
        newList.push({});
      }
      // localStorage.setItem("listProductCompare", JSON.stringify(newList));
      state.listProduct = newList;
    },
    deleteProduct: (state, action) => {
      const newList = state.listProduct.filter(
        (item) => item._id !== action.payload
      );
      while (newList.length < 3) {
        newList.push({});
      }
      // localStorage.setItem("listProductCompare", JSON.stringify(newList));
      state.listProduct = newList;
    },
    deleteAllProduct: (state) => {
      // localStorage.removeItem("listProductCompare");
      state.listProduct = [{}, {}, {}];
    },
  },
});

export const { addProduct, deleteProduct, deleteAllProduct } =
  listProductCompareSlice.actions;
export const listProductCompareReducer = listProductCompareSlice.reducer;
