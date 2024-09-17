"use client";

import { Star } from "lucide-react";
export const columns = [
  {
    accessorKey: "index",
    header: "STT",
    cell: ({ row }) => {
      return (
        <p className="line-clamp-2 text-base font-normal max-w-[155px]">
          {row.index + 1}
        </p>
      );
    },
  },
  {
    accessorKey: "productName",
    header: "Tên nhà cung cấp",
    cell: ({ row }) => {
      const provider = row?.original;
      return (
        <p className="line-clamp-2 text-base font-normal max-w-[155px]">
          {provider?.name}
        </p>
      );
    },
  },
  {
    accessorKey: "Brand",
    header: ({ column }) => {
      return <div className="hidden xl:block">Số điện thoại</div>;
    },
    cell: ({ row }) => {
      const provider = row?.original;
      return <div className="text-sm font-medium">{provider?.phone}</div>;
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return <div className="hidden xl:block">Địa chỉ</div>;
    },
    cell: ({ row }) => {
      const provider = row?.original;
      return (
        <div className="text-sm font-medium flex items-center">
          {provider.address}
        </div>
      );
    },
  },
];
