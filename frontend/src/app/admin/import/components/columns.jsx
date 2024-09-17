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
          {row.index + 1}
        </p>
      );
    },
  },
  {
    accessorKey: "user",
    header: "Tên người nhập",
    cell: ({ row }) => {
      const importInvoice = row?.original;
      return (
        <p className="line-clamp-2 text-base font-normal max-w-[155px]">
          {importInvoice.user.name}
        </p>
      );
    },
  },
  {
    accessorKey: "provider",
    header: ({ column }) => {
      return <div className="hidden xl:block">Nhà cung cấp</div>;
    },
    cell: ({ row }) => {
      const importInvoice = row?.original;
      return (
        <div className="text-sm font-medium">{importInvoice.provider.name}</div>
      );
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return <div className="hidden xl:block">Tổng tiền</div>;
    },
    cell: ({ row }) => {
      const importInvoice = row?.original;

      return (
        <div className="text-sm font-medium text-accent">
          {formatPrice(importInvoice.total_amount)}
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: () => <div className="hidden sm:block">Ngày nhập</div>,
    cell: ({ row }) => {
      const importInvoice = row?.original;
      return (
        <span className="text-[10px] font-bold lg:text-sm">
          {moment(importInvoice.createdAt).format("YYYY-MM-DD HH:mm:ss")}
        </span>
      );
    },
  },
  {
    accessorKey: "action",
    header: () => <div className="hidden sm:block">Thao tác</div>,
    cell: ({ row }) => {
      const importInvoiceId = row?.original._id;
      console.log("importInvoiceId", importInvoiceId);
      return (
        <Link href={`/admin/import/edit/${importInvoiceId}`}>
          <Button className="hidden sm:block" variant="ghost">
            <FilePenLine size={18} />
          </Button>
        </Link>
      );
    },
  },
];
