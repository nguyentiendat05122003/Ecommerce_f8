"use client";

import { Checkbox } from "@/components/ui/checkbox";

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
    accessorKey: "name",
    header: "Tên",
    cell: ({ row }) => {
      const user = row?.original;
      return (
        <p className="line-clamp-2 text-base font-normal max-w-[155px]">
          {user.name}
        </p>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return <div className="hidden xl:block">Email</div>;
    },
    cell: ({ row }) => {
      const user = row?.original;
      return <div className="text-sm font-medium">{user?.email}</div>;
    },
  },
  {
    accessorKey: "phone",
    header: ({ column }) => {
      return <div className="hidden xl:block">Số điện thoại</div>;
    },
    cell: ({ row }) => {
      const user = row?.original;
      return (
        <div className="text-sm font-medium flex items-center">
          {user.phone}
        </div>
      );
    },
  },
  {
    accessorKey: "role",
    header: ({ column }) => {
      return <div className="hidden xl:block">Quyền</div>;
    },
    cell: ({ row }) => {
      const user = row?.original;
      let className = "";
      if (user.role === "admin") {
        className = "text-green";
      } else {
        className = "text-red";
      }
      return (
        <div
          className={`text-sm font-medium flex items-center ${className} uppercase`}
        >
          {user.role}
        </div>
      );
    },
  },
];
