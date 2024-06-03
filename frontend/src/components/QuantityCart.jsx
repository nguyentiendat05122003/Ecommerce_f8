"use client";
import { Button } from "@/components/ui/button";
import { fetchCartProducts } from "@/lib/features/cartSlice";
import { useAppSelector } from "@/lib/hook";
import { clientSessionToken } from "@/lib/http";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
export default function QuantityCart() {
  const dispatch = useDispatch();
  const { listProduct } = useAppSelector((state) => state.cartStore);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user?._id;
    setIsAdmin(user.role !== "admin");
    const isAuth = !!clientSessionToken.token.accessToken;
    isAdmin && isAuth && dispatch(fetchCartProducts(userId));
  }, [dispatch]);
  return (
    <>
      {isAdmin && (
        <Link prefetch={true} href="/cart">
          <div className="relative h-fit xl:mr-1.5">
            <Button
              className="hover:bg-transparent leading-none text-gray dark:text-gray-red xl:text-[20px]"
              variant="ghost"
              size="icon"
            >
              <ShoppingCart />
              <span
                className="absolute w-3 h-3 rounded-full bg-green top-0 -right-0 border-[2px] border-background
                                    xl:w-6 xl:h-6 xl:-top-2 xl:-right-3 xl:flex xl:items-center xl:justify-center"
              >
                <span className="hidden text-xs font-bold text-white dark:text-[#00193B] xl:block">
                  {listProduct.length || 0}
                </span>
              </span>
            </Button>
          </div>
        </Link>
      )}
    </>
  );
}
