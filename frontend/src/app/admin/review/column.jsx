"use client";

import { formatPrice } from "@/lib/utils";
import { Star } from "lucide-react";
import moment from "moment";
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
    header: "Người đánh giá",
    cell: ({ row }) => {
      const review = row?.original;
      return (
        <p className="line-clamp-2 text-base font-normal max-w-[155px]">
          {review?.user.name}
        </p>
      );
    },
  },
  {
    accessorKey: "Brand",
    header: ({ column }) => {
      return <div className="hidden xl:block">Nội dung</div>;
    },
    cell: ({ row }) => {
      const review = row?.original;
      return <div className="text-sm font-medium">{review?.review}</div>;
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return <div className="hidden xl:block">Số sao</div>;
    },
    cell: ({ row }) => {
      const review = row?.original;
      return (
        <div className="text-sm font-medium flex items-center">
          {review.rating} <Star size="15" fill="#F8D518" strokeWidth={0} />
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: () => <div className="hidden sm:block">Sản phẩm</div>,
    cell: ({ row }) => {
      const review = row?.original;

      return (
        <span className="text-[10px] font-bold lg:text-sm">
          {review.product.name}
        </span>
      );
    },
  },
];
