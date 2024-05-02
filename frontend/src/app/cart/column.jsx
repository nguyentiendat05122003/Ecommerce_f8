"use client";

import { ArrowUpDown, Minus, Plus } from "lucide-react";
import sliderDeProduct1 from "../../app/img/products/1.webp";
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
    accessorKey: "product",
    header: "Sản phẩm",
    cell: ({ row }) => (
      // <div className="capitalize">{row.getValue("product")}</div>
      <div className="flex items-center max-w-[315px] gap-2">
        <Image
          alt="product"
          src={sliderDeProduct1}
          className="w-[80px] h-auto rounded"
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
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Đơn Giá
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      //  <div className="lowercase">{row.getValue("price")}</div>
      <div className="flex items-center gap-2">
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
        <div className="flex items-center font-medium max-h-[32px] max-w-[114px] border-min border-solid border-inputBorder rounded">
          <button
            className="w-[32px] h-[32px] border-none flex items-center justify-center"
            variant="ghost"
          >
            <Plus size={16} />
          </button>
          <Input
            defaultValue="3"
            className="outline-none h-[32px] w-[50px] bg-transparent text-center rounded-none border-x-none border-y-min border-solid border-inputBorder"
          />
          <button
            className="w-[32px] h-[32px] flex items-center justify-center"
            variant="ghost"
          >
            <Minus size={16} />
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
        <span className="text-accent font-bold text-sm">10.490.000 ₫</span>
      </div>
    ),
  },
  {
    header: "Thao Tác",
    cell: ({ row }) => <Button variant="ghost">Xóa</Button>,
  },
];
