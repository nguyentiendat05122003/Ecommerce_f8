"use client";
import { Button } from "@/components/ui/button";
import { fetchAddProductToCart } from "@/lib/features/cartSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function ButtonAddToCart({ productId }) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const productData = {
      productId: productId,
      quantity: 1,
      cart_userId: user._id,
    };
    dispatch(fetchAddProductToCart(productData));
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  return (
    <Button
      onClick={handleAddToCart}
      className="text-white dark:text-[#00193B] bg-red hover:bg-red flex-1 border-min border-solid border-red text-sm font-semibold"
    >
      Thêm vào giỏ hàng
    </Button>
  );
}