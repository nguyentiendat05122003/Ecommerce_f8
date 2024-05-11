"use client";

import { ArrowUpDown, Minus, Plus } from "lucide-react";
import sliderDeProduct1 from "../../app/assets/img/products/1.webp";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { Input } from "@/components/ui/input";
export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        className="hidden xl:block"
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className="hidden xl:block"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "product",
    header: "Sản phẩm",
    cell: ({ row }) => (
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
      return <div className="hidden xl:block">Đơn Giá</div>;
    },
    cell: ({ row }) => (
      //  <div className="lowercase">{row.getValue("price")}</div>
      <div className="hidden xl:flex items-center gap-2">
        <p className="font-normal line-through text-sm">13.290.000 ₫</p>
        <span className="text-accent font-bold text-sm">10.490.000 ₫</span>
      </div>
    ),
  },
  {
    accessorKey: "quantity",
    header: () => <div className="">Số lượng</div>,
    cell: ({ row }) => {
      const quantity = parseFloat(row.getValue("quantity"));

      // // Format the quantity as a dollar quantity
      // const formatted = new Intl.NumberFormat("en-US", {
      //   style: "currency",
      //   currency: "USD",
      // }).format(quantity);

      return (
        <div className="flex items-center font-medium max-h-[32px] sm:max-w-[114px] border-none sm:border-min sm:border-solid sm:border-inputBorder rounded">
          <button
            className="w-[20px] xl:w-[32px] xl:h-[32px] border-none flex items-center justify-center"
            variant="ghost"
          >
            <Plus className="sm:w-4 sm:h-4 h-3 w-3" />
          </button>
          <Input
            defaultValue="3"
            className="w-[20px] sm:w-[30px] p-0 xl:px-3 xl:py-2 outline-none h-[32px] xl:w-[50px] bg-transparent text-center rounded-none border-none sm:border-y-min sm:border-solid sm:border-inputBorder"
          />
          <button
            className="w-[20px] xl:w-[32px] xl:h-[32px] flex items-center justify-center"
            variant="ghost"
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
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <span className="text-[10px] text-accent font-bold lg:text-sm">
          10.490.000 ₫
        </span>
      </div>
    ),
  },
  {
    accessorKey: "action",
    header: () => <div className="hidden sm:block">Thao tác</div>,
    cell: ({ row }) => (
      <Button className="hidden sm:block" variant="ghost">
        Xóa
      </Button>
    ),
  },
];
