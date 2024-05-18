import { listProductCompareReducer } from "@/lib/features/listProductCompareSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = () => {
  return configureStore({
    reducer: {
      listProductCompare: listProductCompareReducer,
    },
  });
};
