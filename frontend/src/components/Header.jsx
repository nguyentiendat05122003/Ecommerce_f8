import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AlignJustify, Bell, MessageSquare, Search } from "lucide-react";

export default function Header() {
  const user = true;
  return (
    <header className="h-[60px] pt-[15px] flex items-center justify-between">
      <Logo />
      <AlignJustify className="sm:hidden" />
      <div className="hidden relative flex-1 sm:block sm:max-w-[1054px] ml-5 mr-auto 4xl:ml-0">
        <input
          className="hover:transition-all focus:border-inputBorder hover:border-inputBorder bg-transparent w-full field-input outline-none !pr-[60px] h-searchHeight px-[20px] rounded-lg border-min border-solid"
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
        {user ? (
          <>
            <div className="relative h-fit xl:mr-1.5">
              <Button
                className=" hover:bg-transparent leading-none text-gray dark:text-gray-red xl:text-[20px]"
                variant="ghost"
                size="icon"
              >
                <Bell />
                <span
                  className="absolute w-3 h-3 rounded-full bg-red top-0 -right-0 border-[2px]  border-background
                                  xl:w-6 xl:h-6 xl:-top-2 xl:-right-2 xl:flex xl:items-center xl:justify-center"
                >
                  <span className="hidden text-xs font-bold xl:block text-white dark:text-[#00193B]">
                    2
                  </span>
                </span>
              </Button>
            </div>
            <div className="relative h-fit xl:mr-1.5">
              <Button
                className="hover:bg-transparent  leading-none text-gray dark:text-gray-red xl:text-[20px]"
                variant="ghost"
                size="icon"
              >
                <MessageSquare />
                <span
                  className="absolute w-3 h-3 rounded-full bg-green top-0 -right-0 border-[2px] border-background
                                  xl:w-6 xl:h-6 xl:-top-2 xl:-right-3 xl:flex xl:items-center xl:justify-center"
                >
                  <span className="hidden text-xs font-bold text-white dark:text-[#00193B] xl:block">
                    2
                  </span>
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
