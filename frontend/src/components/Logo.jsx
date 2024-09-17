"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SIDEBAR_ADMIN } from "@/constants";
import { AlignJustify } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LogoDark from "../app/assets/img/icons/logo_dark.svg";
import LogoLight from "../app/assets/img/icons/logo_light.svg";
export default function Logo({ className = "", textOnly = true }) {
  const { theme } = useTheme();
  const [isAdmin, setIsAdmin] = useState();
  useEffect(() => {
    const role = JSON.parse(localStorage.getItem("user"))?.role;
    setIsAdmin(role !== "admin");
  }, []);
  let Logo = theme === "light" ? LogoLight : LogoDark;
  const [listItemSideBar, setListItemSideBar] = useState(SIDEBAR_ADMIN);
  const handleClickItem = (id) => {
    setListItemSideBar((prev) =>
      prev.map((item) => ({
        ...item,
        active: item.id === id,
      }))
    );
  };
  return (
    <>
      {isAdmin ? (
        <Link className="hidden sm:flex items-center" href="/">
          <Image
            className={className}
            src={Logo}
            width="45"
            height="40"
            alt="logo"
            priority={true}
          />
          <h4>{textOnly && "ShopPoint"}</h4>
        </Link>
      ) : (
        <>
          <Sheet className="bg-widget drop-shadow-main">
            <SheetTrigger asChild>
              <AlignJustify
                color="#4F89FC"
                className="cursor-pointer"
                size={30}
                strokeWidth={3}
              />
            </SheetTrigger>
            <SheetContent side="left" className="bg-widget w-[342px]">
              <SheetHeader className="pb-4">
                <SheetTitle>
                  <Link
                    className="hidden sm:flex items-center justify-start gap-1"
                    href="/admin/dashboard"
                  >
                    <Image
                      src={Logo}
                      width="45"
                      height="40"
                      alt="logo"
                      priority={true}
                    />
                    <h4 className="text-header">ShopPoint</h4>
                  </Link>
                </SheetTitle>
                <div className="flex flex-col gap-4 pt-[25px]">
                  {listItemSideBar.map((item, idx) => {
                    const Icon = item.Icon;
                    return (
                      <Link href={item.link} key={idx}>
                        <SheetClose className="w-full">
                          <div
                            onClick={() => handleClickItem(item.id)}
                            className={`${
                              item.active
                                ? "!border-inputBorder bg-background"
                                : ""
                            } hover:border-inputBorder hover:bg-background cursor-pointer h-[44px] rounded pl-[12px] pr-[18px] flex items-center  gap-[11px] text-base font-bold border-min border-solid border-transparent text-header`}
                          >
                            <Icon size={22} />
                            <span className="text-base font-bold">
                              {item.name}
                            </span>
                          </div>
                        </SheetClose>
                      </Link>
                    );
                  })}
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </>
      )}
    </>
  );
}
