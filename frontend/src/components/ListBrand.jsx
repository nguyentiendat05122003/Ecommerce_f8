import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../app/img/1024px-HP_logo_2012.svg.png";
import { Badge } from "@/components/ui/badge";
export default function ListBrand() {
  return (
    <div className="flex gap-4">
      <div className="">
        <Badge
          variant="outline"
          className=" cursor-pointer min-h-[36px] w-[100px] flex justify-center border-min border-solid border-inputBorder"
        >
          <Link href="/" className="">
            <Image className="w-auto h-[20px]" src={logo} alt="logo" />
          </Link>
        </Badge>
      </div>
    </div>
  );
}
