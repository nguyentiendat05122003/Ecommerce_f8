import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ItemTypeProduct({ item }) {
  const { name, thumb } = item;
  return (
    <>
      <Link
        href="/"
        className="w-[10%] h-[125px] min-h-[125px] bg-widget drop-shadow-main rounded-[10px]  flex flex-col gap-2"
      >
        <span className="text-sm font-bold px-[5px] mt-[5px]">{name}</span>
        <Image
          style={{ width: "100%", height: "auto" }}
          className=""
          width={120}
          height={100}
          src={thumb}
          alt="logo"
        />
      </Link>
    </>
  );
}
