"use client";

import moment from "moment";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FilePenLine } from "lucide-react";
export const columns = [
  {
    accessorKey: "index",
    header: "STT",
    cell: ({ row }) => {
      return (
        <p className="line-clamp-2 text-base font-normal max-w-[155px]">
          {" "}
          {row.index + 1}
        </p>
      );
    },
  },
  {
    accessorKey: "productName",
    header: "Tên người mua",
    cell: ({ row }) => {
      const payment = row?.original;
      console.log("payment", payment);
      return (
        <p className="line-clamp-2 text-base font-normal max-w-[155px]">
          {payment?.name}
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
      const payment = row?.original;
      return <div className="text-sm font-medium">{payment.phone}</div>;
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return <div className="hidden xl:block">Tổng tiền</div>;
    },
    cell: ({ row }) => {
      const payment = row?.original;
      return (
        <div className="text-sm font-medium">
          {formatPrice(payment.total_amount)}
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: () => <div className="hidden sm:block">Ngày tạo</div>,
    cell: ({ row }) => {
      const payment = row?.original;

      return (
        <span className="text-[10px] font-bold lg:text-sm">
          {moment(payment.createdAt).format("YYYY-MM-DD HH:mm:ss")}
        </span>
      );
    },
  },
  {
    accessorKey: "state",
    header: () => <div className="hidden sm:block">Trạng thái</div>,
    cell: ({ row }) => {
      let state = row?.original.state;
      let className = "";
      if (state === "pending") {
        className = "text-yellow";
        state = "Đang chờ xác nhận";
      } else if (state === "failed") {
        className = "text-red";
        state = "Thất bại";
      } else if (state === "completed") {
        className = "text-green";
        state = "Thành công";
      }

      return (
        <span
          className={`text-[10px] text-accent font-bold lg:text-sm uppercase ${className}`}
        >
          {state}
        </span>
      );
    },
  },
  {
    accessorKey: "paid",
    header: () => <div className="hidden sm:block">Thanh toán</div>,
    cell: ({ row }) => {
      let payment = row?.original;
      return (
        <span
          className={`text-[10px] text-header font-bold lg:text-sm uppercase`}
        >
          {payment.paid ? "Đã thanh toán" : "Chưa thanh toán"}
        </span>
      );
    },
  },
  {
    accessorKey: "action",
    header: () => <div className="hidden sm:block">Thao tác</div>,
    cell: ({ row }) => {
      const paymentId = row?.original._id;
      return (
        <Link href={`/admin/payment/edit/${paymentId}`}>
          <Button className="hidden sm:block" variant="ghost">
            <FilePenLine size={18} />
          </Button>
        </Link>
      );
    },
  },
];
