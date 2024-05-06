import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ListBrand from "@/components/ListBrand";
import ListProduct from "@/components/ListProduct";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ArrowDownNarrowWide,
  ArrowUpNarrowWide,
  ChevronDown,
  CircleDollarSign,
  CircleHelp,
  CircleX,
  Filter,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import test from "../app/img/categories/1.png";
import { Slider } from "@/components/ui/slider";

export default function Home() {
  return (
    <main className="px-4">
      <Header />
      <div className="main mt-[26px] ">
        {/* <Slider /> */}
        <ListBrand />
        {/* Type product */}
        <div className="mt-10 hidden xl:block">
          <h6 className="text-base font-bold">Chọn theo nhu cầu</h6>
          <div className="mt-3 flex gap-[10px] items-center justify-start">
            <Link
              href="/"
              className="w-[10%] min-h-[125px] bg-widget drop-shadow-main rounded-[10px]  flex flex-col gap-5"
            >
              <span className="text-sm font-bold px-[5px] mt-[5px]">
                Văn phòng
              </span>
              <Image className=" w-full  " src={test} alt="category" />
            </Link>
          </div>
        </div>
        <div className="mt-10">
          <h6 className="text-base font-bold mb-2">Chọn theo tiêu chí</h6>
          <div className="flex items-center">
            <button className="drop-shadow-main flex items-center text-xs font-normal gap-1 cursor-pointer rounded-[10px] h-[34px] py-[5px] px-[10px] mb-[10px] mr-[10px] bg-widget">
              <Filter size={16} />
              Bộ lọc
            </button>

            <Popover>
              <PopoverTrigger className="text-red border-min border-red border-solid drop-shadow-main flex items-center text-xs font-normal gap-1 cursor-pointer rounded-[10px] h-[34px] py-[5px] px-[10px] mb-[10px] mr-[10px] bg-widget">
                <CircleDollarSign size={16} />
                Giá
              </PopoverTrigger>
              <PopoverContent className="bg-widget rounded-lg ">
                <div className="flex justify-between mb-3">
                  <span>0đ</span>
                  <span>110.000.000đ</span>
                </div>
                <Slider
                  className="mb-3"
                  defaultValue={[50]}
                  max={100}
                  step={1}
                />
                <div className="flex justify-end gap-1">
                  <button className="bg-red rounded text-white font-semibold text-sm w-[160px] px-[14px] py-[6px]">
                    Kết quả
                  </button>
                </div>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger className="drop-shadow-main flex items-center text-xs font-normal gap-1 cursor-pointer rounded-[10px] h-[34px] py-[5px] px-[10px] mb-[10px] mr-[10px] bg-widget">
                <>
                  Ổ cứng
                  <ChevronDown size={16} />
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <CircleHelp size={16} />
                      </TooltipTrigger>
                      <TooltipContent className="bg-widget rounded">
                        <p className="text-xs font-normal max-w-[200px]">
                          Ổ cứng là thiết bị dùng để lưu trữ dữ liệu trong máy
                          tính. Loại ổ cứng phổ biến hiện nay là SSD với tốc độ
                          đọc ghi, khởi động ứng dụng nhanh hơn so với HDD.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </>
              </PopoverTrigger>
              <PopoverContent className="bg-widget rounded-lg ">
                <ul className="flex items-center">
                  <li className="font-xs font-normal border-min px-[10px] py-[5px] rounded-[10px]">
                    120GB
                  </li>
                </ul>
              </PopoverContent>
            </Popover>
            <button className="drop-shadow-main flex items-center text-xs font-normal gap-1 cursor-pointer rounded-[10px] h-[34px] py-[5px] px-[10px] mb-[10px] mr-[10px] bg-widget">
              Dung lượng RAM
              <ChevronDown size={16} />
              <CircleHelp size={16} />
            </button>
            <button className="drop-shadow-main flex items-center text-xs font-normal gap-1 cursor-pointer rounded-[10px] h-[34px] py-[5px] px-[10px] mb-[10px] mr-[10px] bg-widget">
              CPU
              <ChevronDown size={16} />
            </button>
            <button className="drop-shadow-main flex items-center text-xs font-normal gap-1 cursor-pointer rounded-[10px] h-[34px] py-[5px] px-[10px] mb-[10px] mr-[10px] bg-widget">
              Kích thước màn hình
              <ChevronDown size={16} />
            </button>
            <button className="drop-shadow-main flex items-center text-xs font-normal gap-1 cursor-pointer rounded-[10px] h-[34px] py-[5px] px-[10px] mb-[10px] mr-[10px] bg-widget">
              Độ phân giải
              <ChevronDown size={16} />
            </button>
            <button className="drop-shadow-main flex items-center text-xs font-normal gap-1 cursor-pointer rounded-[10px] h-[34px] py-[5px] px-[10px] mb-[10px] mr-[10px] bg-widget">
              Card đồ họa
              <ChevronDown size={16} />
              <CircleHelp size={16} />
            </button>
            <button className="drop-shadow-main flex items-center text-xs font-normal gap-1 cursor-pointer rounded-[10px] h-[34px] py-[5px] px-[10px] mb-[10px] mr-[10px] bg-widget">
              Tính năng đặc biệt
              <ChevronDown size={16} />
            </button>
            <button className="drop-shadow-main flex items-center text-xs font-normal gap-1 cursor-pointer rounded-[10px] h-[34px] py-[5px] px-[10px] mb-[10px] mr-[10px] bg-widget">
              Hãng sản xuất
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
        <div className="">
          <h6 className="text-base font-bold">Đang lọc theo</h6>
          <div className="mt-3 flex  items-center justify-start">
            <button className="drop-shadow-main flex items-center text-xs font-normal gap-1 cursor-pointer rounded-[10px] h-[34px] py-[5px] px-[10px] mb-[10px] mr-[10px] bg-widget">
              <CircleX size={16} />
              Hãng sản xuất: Lenovo
            </button>
            <button className="drop-shadow-main flex items-center text-xs font-normal gap-1 cursor-pointer rounded-[10px] h-[34px] py-[5px] px-[10px] mb-[10px] mr-[10px] bg-widget">
              <X size={16} />
              Bỏ chọn tất cả
            </button>
          </div>
        </div>
        <div className="mt-3">
          <h6 className="text-base font-bold">Sắp xếp theo</h6>
          <div>
            <Tabs defaultValue="account">
              <TabsList className="mt-3 flex  items-center justify-start">
                <TabsTrigger
                  className="drop-shadow-main flex items-center text-xs font-normal gap-1 cursor-pointer rounded-[10px] h-[34px] py-[5px] px-[10px] mb-[10px] mr-[10px] bg-widget"
                  value="account"
                >
                  <ArrowDownNarrowWide size={16} />
                  Giá Cao - Thấp
                </TabsTrigger>
                <TabsTrigger
                  className="drop-shadow-main flex items-center text-xs font-normal gap-1 cursor-pointer rounded-[10px] h-[34px] py-[5px] px-[10px] mb-[10px] mr-[10px] bg-widget"
                  value="password"
                >
                  <ArrowUpNarrowWide size={16} />
                  Giá Thấp - Cao
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        <div className="main_container flex items-start gap-5">
          <ListProduct />
        </div>
        <Footer />
      </div>
    </main>
  );
}
