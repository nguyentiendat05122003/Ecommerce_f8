"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FilePenLine, Images } from "lucide-react";
import Image from "next/image";
import sliderDeProduct1 from "../../../assets/img/products/1.webp";
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
    header: ({ column }) => {
      return (
        <div>
          <Images color="#4F89FC" />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="flex items-center w-[45px] h-[45px] gap-2">
        <Image
          alt="product"
          src={sliderDeProduct1}
          className="hidden md:block w-[80px] h-auto rounded"
        />
      </div>
    ),
  },
  {
    accessorKey: "brand",
    header: ({ column }) => {
      return <div className="hidden xl:block">Brand</div>;
    },
    cell: ({ row }) => (
      <div className="text-sm font-medium">Xiaomi WiFI Repeater Pro</div>
    ),
  },
  {
    accessorKey: "Type",
    header: ({ column }) => {
      return <div className="hidden xl:block">Type</div>;
    },
    cell: ({ row }) => <div className="text-sm font-medium">Dell Express</div>,
  },
  {
    accessorKey: "quantity",
    header: () => <div className="">Stock</div>,
    cell: ({ row }) => {
      const quantity = parseFloat(row.getValue("quantity"));

      return (
        <>
          <span className="text-green">In stock </span>(120)
        </>
      );
    },
  },
  {
    header: "Price",
    cell: ({ row }) => (
      <span className="text-[10px] text-accent font-bold lg:text-sm">
        10.490.000 ₫
      </span>
    ),
  },
  {
    accessorKey: "action",
    header: () => <div className="hidden sm:block">Thao tác</div>,
    cell: ({ row }) => (
      <Button className="hidden sm:block" variant="ghost">
        <FilePenLine size={18} />
      </Button>
    ),
  },
];
