"use client";

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
    accessorKey: "Brand",
    header: ({ column }) => {
      return <div className="hidden xl:block">Email</div>;
    },
    cell: ({ row }) => {
      const user = row?.original;
      return <div className="text-sm font-medium">{user?.email}</div>;
    },
  },
  {
    accessorKey: "type",
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
];
