"use client";

import Image from "next/image";
export const columnsDetailImport = [
  {
    accessorKey: "product",
    header: "Sản phẩm",
    cell: ({ row }) => {
      const product = row?.original?.productId || row.getValue("product");
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
    header: ({ column }) => {
      return <div className="hidden md:block">Đơn Giá</div>;
    },
    cell: ({ row }) => {
      const price = row.getValue("price");
      return (
        <div className="hidden xl:flex items-center gap-2">
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
      const quantity = row.getValue("quantity");
      return <div className="font-bold text-sm">{quantity}</div>;
    },
  },
  {
    accessorKey: "amount",
    header: "Thành tiền",
    cell: ({ row }) => {
      const quantity = row.getValue("quantity");
      const price = row.getValue("price");
      console.log("price", price);
      const totalAmount = price * quantity;
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
];
