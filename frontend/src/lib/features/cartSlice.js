import cartApiRequest from "@/apiRequests/cart";
import { toast } from "@/components/ui/use-toast";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  listProduct: [],
};

export const fetchAddProductToCart = createAsyncThunk(
  "cart/fetchAddProductToCart",
  async (data) => {
    try {
      const response = await cartApiRequest.addProductInCart(data);
      toast({
        title: "Thông báo",
        description: "Đã thêm sản phẩm vào giỏ hàng",
        variant: "success",
        duration: 2000,
      });
      return response.cart_products;
    } catch (error) {
      console.log(error);
    }
  }
);
export const fetchCartProducts = createAsyncThunk(
  "cart/fetchCartProducts",
  async (userId) => {
    try {
      const response = await cartApiRequest.getCart(userId);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
    }
  }
);
export const fetchUpdateProductsInCart = createAsyncThunk(
  "cart/fetchUpdateProductsInCart",
  async (data) => {
    try {
      const response = await cartApiRequest.updateProductInCart(
        data.cart_userId,
        data
      );
      return response.cart_products;
    } catch (error) {
      console.log(error);
    }
  }
);
export const fetchDeleteProductInCart = createAsyncThunk(
  "cart/fetchDeleteProductInCart",
  async ({ userId, productId }) => {
    try {
      const response = await cartApiRequest.deleteProductInCart(
        userId,
        productId
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddProductToCart.fulfilled, (state, action) => {
        state.listProduct = action.payload;
      })
      .addCase(fetchCartProducts.fulfilled, (state, action) => {
        state.listProduct = action.payload;
      })
      .addCase(fetchDeleteProductInCart.fulfilled, (state, action) => {
        state.listProduct = action.payload;
      })
      .addCase(fetchUpdateProductsInCart.fulfilled, (state, action) => {
        state.listProduct = action.payload;
      });
  },
});

const cartReducer = cartSlice.reducer;
export default cartReducer;
