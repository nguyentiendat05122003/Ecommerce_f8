"use client";

import { ArrowUpDown, Minus, Plus } from "lucide-react";
import sliderDeProduct1 from "../../app/img/products/1.webp";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { Input } from "@/components/ui/input";
export const columns = [
  {
    accessorKey: "product",
    header: "Sản phẩm",
    cell: ({ row }) => (
      // <div className="capitalize">{row.getValue("product")}</div>
      <div className="flex items-center max-w-[315px] gap-2">
        <Image
          alt="product"
          src={sliderDeProduct1}
          className="hidden md:block w-[80px] h-auto rounded"
        />
        <p className="line-clamp-2 text-sm font-normal">
          Bộ Bàn Phím Chuột Bluetooth Không Dây Ziyou M87 LED Kết Nối Đa Năng
          Chơi Game Dùng Văn Phòng
        </p>
      </div>
    ),
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return <div className="hidden md:block">Đơn Giá</div>;
    },
    cell: ({ row }) => (
      //  <div className="lowercase">{row.getValue("price")}</div>
      <div className="hidden md:flex items-center gap-2">
        <span className="text-accent font-bold text-sm">10.490.000 ₫</span>
      </div>
    ),
  },
  {
    accessorKey: "quantity",
    header: "Số lượng",
    cell: ({ row }) => {
      const quantity = parseFloat(row.getValue("quantity"));
      return <div className="font-bold text-sm">1</div>;
    },
  },
  {
    accessorKey: "amount",
    header: "Thành tiền",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <span className="text-[10px] text-accent font-bold lg:text-sm">
          10.490.000 ₫
        </span>
      </div>
    ),
  },
];
