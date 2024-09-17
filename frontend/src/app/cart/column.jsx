"use client";

import { ArrowUpDown, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchDeleteProductInCart,
  fetchUpdateProductsInCart,
} from "@/lib/features/cartSlice";
import CustomDeleteDialog from "@/components/CustomDeleteDialog";
import { useToast } from "@/components/ui/use-toast";

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "productId",
    header: "Sản phẩm",
    cell: ({ row }) => {
      const product = row?.original?.productId;
      return (
        <div className="flex items-center max-w-[315px] gap-2">
          <Image
            alt={product?.name}
            src={product?.thumbs[0]?.thumb_url || "/path/to/default/image.jpg"}
            className="hidden md:block w-[80px] h-auto rounded"
            width={80}
            height={80}
          />
          <p className="line-clamp-2 text-sm font-normal">{product?.name}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: "Đơn Giá",
    cell: ({ row }) => {
      const price = row.original.productId.price;
      return (
        <div className="hidden xl:flex items-center gap-2">
          <p className="font-normal line-through text-sm">13.290.000 ₫</p>
          <span className="text-accent font-bold text-sm">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(price)}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: "Số lượng",
    cell: ({ row }) => {
      const [quantity, setQuantity] = useState(row.getValue("quantity"));
      const { toast } = useToast();
      const productId = row.original.productId._id;
      const quantityProduct = row.original.productId.quantity;
      const userId = JSON.parse(localStorage.getItem("user"))._id;
      const dispatch = useDispatch();
      const handleIncrease = () => {
        if (quantity + 1 > quantityProduct) {
          toast({
            title: "Thông báo",
            description: "Sản phẩm này không đủ số lượng",
            variant: "error",
            duration: 2000,
          });
          return;
        } else {
          setQuantity((prev) => prev + 1);
          dispatch(
            fetchUpdateProductsInCart({
              productId: productId,
              cart_userId: userId,
              quantity: quantity + 1,
            })
          );
        }
      };

      const handleDecrease = () => {
        if (quantity > 1) {
          setQuantity((prev) => prev - 1);
          dispatch(
            fetchUpdateProductsInCart({
              productId: productId,
              cart_userId: userId,
              quantity: quantity - 1,
            })
          );
        }
      };

      return (
        <div className="flex items-center font-medium max-h-[32px] sm:max-w-[114px] border-none sm:border-min sm:border-solid sm:border-inputBorder rounded">
          <button
            className="w-[20px] xl:w-[32px] xl:h-[32px] border-none flex items-center justify-center"
            variant="ghost"
            onClick={handleIncrease}
          >
            <Plus className="sm:w-4 sm:h-4 h-3 w-3" />
          </button>
          <Input
            value={quantity}
            readOnly
            className="w-[20px] sm:w-[30px] p-0 xl:px-3 xl:py-2 outline-none h-[32px] xl:w-[50px] bg-transparent text-center rounded-none border-none sm:border-y-min sm:border-solid sm:border-inputBorder"
          />
          <button
            className="w-[20px] xl:w-[32px] xl:h-[32px] flex items-center justify-center"
            variant="ghost"
            onClick={handleDecrease}
          >
            <Minus className="sm:w-4 sm:h-4 h-3 w-3" />
          </button>
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: "Số Tiền",
    cell: ({ row }) => {
      const product = row.original.productId;
      const quantity = row.getValue("quantity");
      const totalAmount = product.price * quantity;
      return (
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-accent font-bold lg:text-sm">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(totalAmount)}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "action",
    header: () => <div className="hidden sm:block">Thao tác</div>,
    cell: ({ row }) => {
      const userId = JSON.parse(localStorage.getItem("user"))._id;
      const dispatch = useDispatch();
      const handleDeleteProduct = () => {
        const productId = row.original.productId.id;
        dispatch(fetchDeleteProductInCart({ userId, productId }));
      };
      return (
        <CustomDeleteDialog
          onClick={handleDeleteProduct}
          Component={
            <Button className="hidden sm:block" variant="ghost">
              Xóa
            </Button>
          }
          title="Bạn chắc có muốn xóa sản phẩm này không ?"
        />
      );
    },
  },
];
