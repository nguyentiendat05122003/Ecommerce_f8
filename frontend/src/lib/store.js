import cartReducer from "@/lib/features/cartSlice";
import { productCheckoutReducer } from "@/lib/features/listProductCheckout";
import { listProductCompareReducer } from "@/lib/features/listProductCompareSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = () => {
  return configureStore({
    reducer: {
      listProductCompare: listProductCompareReducer,
      cartStore: cartReducer,
      productCheckout: productCheckoutReducer,
    },
  });
};
