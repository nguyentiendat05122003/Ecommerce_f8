"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FilePenLine, Images } from "lucide-react";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
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
    cell: ({ row }) => {
      const product = row?.original;
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
      const product = row?.original;
      return (
        <p className="line-clamp-2 text-sm font-normal max-w-[155px]">
          {product?.name}
        </p>
      );
    },
  },
  {
    accessorKey: "Brand",
    header: ({ column }) => {
      return <div className="hidden xl:block">Hãng</div>;
    },
    cell: ({ row }) => {
      const product = row?.original;
      return (
        <div className="text-sm font-medium">{product.typeBrand.name}</div>
      );
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return <div className="hidden xl:block">Loại sản phẩm</div>;
    },
    cell: ({ row }) => {
      const product = row?.original;
      return (
        <div className="text-sm font-medium">{product.typeProduct.name}</div>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: () => <div className="">Số lượng</div>,
    cell: ({ row }) => {
      const quantity = row?.original.quantity;
      const { title, className } =
        quantity === 0
          ? { title: "Hết hàng", className: "text-red" }
          : quantity < 10
          ? { title: "Sắp hết", className: "text-green" }
          : { title: "Còn hàng", className: "text-green" };
      return (
        <>
          <span className={`${className}`}>{title} </span>({quantity})
        </>
      );
    },
  },
  {
    accessorKey: "price",
    header: () => <div className="">Giá</div>,
    cell: ({ row }) => {
      const product = row?.original;
      return (
        <span className="text-[10px] text-accent font-bold lg:text-sm">
          {formatPrice(product.price)}
        </span>
      );
    },
  },
  {
    accessorKey: "state",
    header: () => <div className="">Trạng thái</div>,
    cell: ({ row }) => {
      const state = row?.original.active;
      const title = state ? "Hoạt động" : "Ngừng hoạt động";
      let className = state ? "text-green" : "text-red";
      return (
        <span
          className={`text-[10px] text-accent font-bold lg:text-sm ${className}`}
        >
          {title}
        </span>
      );
    },
  },
  {
    accessorKey: "action",
    header: () => <div className="hidden sm:block">Thao tác</div>,
    cell: ({ row }) => {
      const productId = row?.original._id;

      return (
        <Link href={`/admin/product/edit/${productId}`}>
          <Button className="hidden sm:block" variant="ghost">
            <FilePenLine size={18} />
          </Button>
        </Link>
      );
    },
  },
];
