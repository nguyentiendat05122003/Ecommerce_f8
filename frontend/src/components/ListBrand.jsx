import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../app/img/brands/Lenovo_logo_2015.svg.png";
import { Badge } from "@/components/ui/badge";
export default function ListBrand() {
  return (
    <div className="flex gap-4">
      <div className="">
        <Badge
          variant="outline"
          className=" cursor-pointer min-h-[36px] w-[120px] flex justify-center rounded-sm border-min border-solid border-accent"
        >
          <Link href="/" className="">
            <Image className="w-auto h-[20px]" src={logo} alt="logo" />
          </Link>
        </Badge>
      </div>
    </div>
  );
}
