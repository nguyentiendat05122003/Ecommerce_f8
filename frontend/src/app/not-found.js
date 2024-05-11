import Image from "next/image";
import React from "react";
import collage from "../app/assets/img/collage_404.webp";
import Link from "next/link";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
export default function NotFound() {
  return (
    <div className="flex flex-1 p-[15px] flex-col items-center relative h-screen">
      <div>
        <Image
          className="hidden sm:block absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2  !w-auto object-cover !h-[602px]"
          src={collage}
          alt="404"
          priority="true"
        />
      </div>
      <div className="relative z-10 sm:w-[592px] sm:h-[592px] flex flex-col justify-center items-center before:absolute before:content-[''] before:top-0 before:left-0 before:z-[-1] before:w-full before:h-full before:bg-subBgNotFound before:drop-shadow-shadowNotFound before:backdrop-blur-[19.028px] before:rounded-[99%]">
        <span className="sm:text-[#00193B] text-[#D8E9FF] text-[120px] font-bold">
          404
        </span>
        <h1 className="sm:text-[#00193B] text-[#D8E9FF]">Page Not Found</h1>
        <Link className="" href="/">
          <Button className="max-w-[300px] border-min border-solid border-[#01C8A9]text-base font-semibold my-[40px] px-[26px] mx-auto w-full text-white bg-green hover:bg-green">
            Back to Home Page
          </Button>
        </Link>
      </div>
      <div className="">
        <Logo />
      </div>
    </div>
  );
}
