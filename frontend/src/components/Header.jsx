import AvatarComp from "@/components/Avatar";
import ButtonLogout from "@/components/ButtonLogout";
import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import Notification from "@/components/Notification";
import QuantityCart from "@/components/QuantityCart";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AlignJustify, Search, ShoppingCart } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";
export default function Header() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const isAuth = !!accessToken;
  return (
    <header className="h-[60px] pt-[15px] flex items-center justify-between xl:mb-[60px]">
      <Logo />
      {/* <AlignJustify className="sm:hidden" /> */}
      <div className="hidden relative flex-1 sm:block sm:max-w-[1054px] ml-5 mr-auto 4xl:ml-0">
        <input
          className="hover:transition-all focus:border-accent hover:border-accent bg-transparent w-full field-input outline-none !pr-[60px] h-searchHeight px-[20px] rounded-lg border-min border-solid"
          type="search"
          placeholder="Search..."
        />
        <Button
          className="hover:bg-transparent absolute right-3 top-1/2 -translate-y-2/4"
          variant="ghost"
          size="icon"
        >
          <Search size={18} />
        </Button>
      </div>
      <div className="flex items-center max-[600px]:gap-2 gap-5 md:ml-5 xl:gap-[26px]">
        <Button
          className="hover:bg-transparent hidden max-[600px]:flex items-center leading-none text-gray dark:text-gray-red xl:text-[20px]"
          variant="ghost"
          size="icon"
        >
          <Search />
        </Button>
        <ModeToggle />
        {isAuth ? (
          <>
            <Notification />
            <QuantityCart />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link prefetch={true} href="/setting">
                    <AvatarComp />
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="bg-widget rounded drop-shadow-main">
                  <div className="flex flex-col gap-3">
                    <Link
                      href="/setting"
                      prefetch={true}
                      className="px-2 py-1 font-normal text-sm"
                    >
                      Tài khoản của tôi
                    </Link>
                    <Link
                      className="px-2 py-1 font-normal text-sm"
                      href="/purchase"
                    >
                      Đơn mua
                    </Link>
                    <ButtonLogout />
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </>
        ) : (
          <>
            <div className="flex h-5 items-center space-x-4 text-sm">
              <Link prefetch={true} href="/login">
                Login
              </Link>
              <Separator orientation="vertical" />
              <Link prefetch={true} href="/register">
                Register
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
