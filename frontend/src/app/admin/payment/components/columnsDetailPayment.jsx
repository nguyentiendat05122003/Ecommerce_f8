"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FilePenLine, Images } from "lucide-react";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
export const columnsDetailPayment = [
  {
    accessorKey: "product",
    header: ({ column }) => {
      return (
        <div>
          <Images color="#4F89FC" />
        </div>
      );
    },
    cell: ({ row }) => {
      const product = row?.original.productId;
      console.log();
      return (
        <div className="flex items-center w-[45px] h-[45px] gap-2">
          <Image
            alt={product?.name}
            width={45}
            height={45}
            src={product?.thumbs[0]?.thumb_url || "/path/to/default/image.jpg"}
            className="hidden md:block w-[80px] h-auto rounded"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "productName",
    header: "Tên sản phẩm",
    cell: ({ row }) => {
      const product = row?.original.productId;
      console.log("product", product);
      return (
        <p className="line-clamp-2 text-sm font-normal">{product?.name}</p>
      );
    },
  },
  {
    accessorKey: "Brand",
    header: ({ column }) => {
      return <div className="hidden xl:block">Hãng</div>;
    },
    cell: ({ row }) => {
      const product = row?.original?.productId;
      return (
        <div className="text-sm font-medium">{product?.typeBrand.name}</div>
      );
    },
  },

  {
    accessorKey: "quantity",
    header: () => <div className="">Số lượng</div>,
    cell: ({ row }) => {
      const quantity = row?.original.quantity;
      return (
        <>
          <span className="text-green text-center ml-[25px]">{quantity}</span>
        </>
      );
    },
  },
  {
    accessorKey: "price",
    header: () => <div className="">Giá</div>,
    cell: ({ row }) => {
      const product = row?.original.productId;

      return (
        <span className="text-[10px] text-accent font-bold lg:text-sm">
          {formatPrice(product.price)}
        </span>
      );
    },
  },
];
