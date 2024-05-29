"use client";
import { fetchCartProducts } from "@/lib/features/cartSlice";
import { useAppSelector } from "@/lib/hook";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function QuantityCart() {
  const dispatch = useDispatch();
  const { listProduct } = useAppSelector((state) => state.cartStore);
  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("user"))?._id;
    dispatch(fetchCartProducts(userId));
  }, [dispatch]);
  return <>{listProduct.length}</>;
}
