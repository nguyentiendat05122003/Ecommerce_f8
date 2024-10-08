"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { addProduct } from "@/lib/features/listProductCheckout";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

export default function ButtonBuyNow({ product, quantity }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { toast } = useToast();
  const handleClickBuyNow = () => {
    if (quantity === 0) {
      toast({
        title: "Thông báo",
        description: "Sản phẩm này đã hết hàng",
        variant: "error",
        duration: 2000,
      });
      router.push("/");
      return;
    }
    dispatch(addProduct([{ productId: product, quantity: 1 }]));
  };
  return (
    <Button
      onClick={handleClickBuyNow}
      className="text-white dark:text-[#00193B] flex-1 hover:bg-[#02A189] bg-[#00BA9D] border-min border-solid border-[#01C8A9] text-sm font-semibold"
    >
      <Link href="/checkout">Mua ngay</Link>
    </Button>
  );
}
