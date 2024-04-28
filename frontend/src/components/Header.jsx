"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../app/img/logo_dark.svg";
import { Bell, MessageSquare, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function Header() {
  const { user } = false;
  return (
    <header className="h-[60px] pt-[15px] flex items-center justify-between">
      <Link className="flex items-center" href="/">
        <Image
          src={Logo}
          width="0"
          height="0"
          className="w-auto h-auto"
          alt="logo"
          priority={true}
        />
        <h4>ShopPoint</h4>
      </Link>
      <div className="relative flex-1 max-w-[1054px] ml-5 mr-auto 4xl:ml-0">
        <input
          className="w-full field-input outline-none !pr-[60px] h-searchHeight px-[20px] rounded-lg border-min border-solid"
          type="search"
          placeholder="Search..."
        />
        <Button
          className="absolute right-3 top-1/2 -translate-y-2/4"
          variant="ghost"
          size="icon"
        >
          <Search size={18} />
        </Button>
      </div>
      <div className="flex items-center gap-5 md:ml-5 xl:gap-[26px]">
        <ModeToggle />
        {user ? (
          <>
            <div className="relative h-fit xl:mr-1.5 mt-[10px]">
              <Button
                className="leading-none text-gray dark:text-gray-red xl:text-[20px] w-5 h-5"
                variant="ghost"
                size="icon"
              >
                <Bell />
                <span
                  className="absolute w-3 h-3 rounded-full bg-red -top-1.5 -right-1.5 border-[2px] border-body
                xl:w-6 xl:h-6 xl:-top-5 xl:-right-4 xl:flex xl:items-center xl:justify-center"
                >
                  7
                </span>
              </Button>
            </div>
            <div className="relative h-fit xl:mr-1.5 mt-[10px]">
              <Button
                className="leading-none text-gray dark:text-gray-red xl:text-[20px] w-5 h-5"
                variant="ghost"
                size="icon"
              >
                <MessageSquare />
                <span
                  className="absolute w-2 h-2 rounded-full bg-red -top-1.5 size-3.5 -right-1.5 border-[2px] border-body
                xl:w-6 xl:h-6 xl:-top-5 xl:-right-4 xl:flex xl:items-center xl:justify-center"
                >
                  2
                </span>
              </Button>
            </div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </>
        ) : (
          <>
            <div className="flex h-5 items-center space-x-4 text-sm">
              <Link href="/login">Login</Link>
              <Separator orientation="vertical" />
              <Link href="/register">Register</Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
