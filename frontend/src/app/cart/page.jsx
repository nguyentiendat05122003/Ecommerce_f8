"use client";
import { Button } from "@/components/ui/button";
import { columns } from "./column";
import { DataTable } from "@/components/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartProducts } from "@/lib/features/cartSlice";
import { useEffect, useState } from "react";
import { formatPrice } from "@/lib/utils";
import { addProduct } from "@/lib/features/listProductCheckout";
import Link from "next/link";
import { clientSessionToken } from "@/lib/http";

export default function Cart() {
  const dispatch = useDispatch();
  const { listProduct } = useSelector((state) => state.cartStore);
  const [selectedItems, setSelectedItems] = useState([]);
  const accessToken = clientSessionToken.token?.accessToken;
  const isAuth = !!accessToken;
  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    isAuth && dispatch(fetchCartProducts(userId));
  }, [dispatch]);

  const handleSelectItem = (items) => {
    setSelectedItems(items);
  };
  const handleClickCheckOut = () => {
    isAuth && dispatch(addProduct(selectedItems));
  };
  return (
    <>
      <div className="flex items-center justify-between pt-[10px] pb-[15px] mb-[16px] min-h-[57px] mt-5 border-b-[1px] border-solid border-inputBorder">
        <h1 className="text-2xl">Shopping Cart</h1>
      </div>
      <div className="w-full">
        <div className="bg-widget rounded-md drop-shadow-main">
          <DataTable
            onSelect={handleSelectItem}
            data={listProduct}
            columns={columns}
          />
        </div>
        <div className="flex justify-end items-center gap-3 my-5">
          <h1 className="text-xl">
            Total :{" "}
            {formatPrice(
              selectedItems.reduce((init, item) => {
                return init + item.quantity * item.productId.price;
              }, 0)
            )}
          </h1>
          <Button
            onClick={handleClickCheckOut}
            className="text-white dark:text-[#00193B] w-[210px] bg-red border-min border-solid border-red text-sm font-semibold hover:bg-red"
          >
            <Link href="/checkout">Check out</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
