"use client";
import {
  CirclePlus,
  Cpu,
  FileImage,
  HardDrive,
  LocateFixed,
  MemoryStick,
  Monitor,
  RefreshCcw,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import prev from "../../img/icons/prev.png";
import { SLIDERS_v2 } from "@/constants";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ProductDetail() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <div className="flex items-center justify-between pt-[10px] pb-[15px] mb-[16px] min-h-[57px] mt-5 border-b-[1px] border-solid border-inputBorder">
        <h1 className="text-lg">
          Laptop HP 245 G10 R5-7520U/8GB/256GB/14"FHD/Win11 (9H8X8PT)
        </h1>
        <div className="flex items-center justify-between gap-3">
          <div className="flex">
            <Star size={18} fill="#F8D518" strokeWidth={0} />
            <Star size={18} fill="#F8D518" strokeWidth={0} />
            <Star size={18} fill="#F8D518" strokeWidth={0} />
            <Star size={18} fill="#F8D518" strokeWidth={0} />
            <Star size={18} fill="rgb(225, 224, 224)" strokeWidth={0} />
          </div>
          <p className="font-bold text-sm leading-[1.4] text-accent">
            32 rating
          </p>
          |
          <p className="font-bold text-sm leading-[1.4] text-accent">
            1 Hỏi & đáp
          </p>
          <p className="flex items-center font-bold text-sm leading-[1.4] text-accent gap-1">
            <CirclePlus />
            <span>So sánh</span>
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="w-[50%]">
          {/* Slider */}
          <div className="slider mb-[6.5rem]">
            <div className="w-[585px] h-[300px]">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Pagination]}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                keyboard={{
                  enabled: true,
                }}
                loop={true}
                scrollbar={{ draggable: true, hide: true }}
                className="relative w-[585px] h-[300px]"
              >
                {SLIDERS_v2.map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <Image
                        alt="slide"
                        className="w-[585px] h-[300px] rounded-sm"
                        src={item.src}
                      />
                    </SwiperSlide>
                  );
                })}
                <div
                  className=" border-min border-solid border-[#ced4da] z-10 group-hover:block cursor-pointer absolute top-[45%] left-[10px] opacity-100 transition-all rounded-full"
                  ref={navigationPrevRef}
                >
                  <Image alt="prev" className="w-[32px] h-[32px]" src={prev} />
                </div>
                <div
                  className="z-10 group-hover:block cursor-pointer absolute border-min border-solid border-[#ced4da] top-[45%] right-[10px] rounded-full opacity-100 transition-all"
                  ref={navigationNextRef}
                >
                  <Image
                    alt="next"
                    className="w-[32px] rotate-180"
                    src={prev}
                  />
                </div>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="h-auto mt-2"
              >
                {SLIDERS_v2.map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <Image
                        className="max-w-[108px] h-auto rounded"
                        alt="slide"
                        src={item.src}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          {/* info */}
          <div className="max-w-[585px] card flex gap-3 flex-col px-[20px] py-[15px] bg-widget drop-shadow-main rounded-[6px] transition-all">
            <h6 className="flex gap-1 items-center text-sm font-bold text-input cursor-pointer">
              <FileImage size={20} />
              AMD Radeon Graphics
            </h6>
            <h6 className="flex gap-1 items-center text-sm font-bold text-input cursor-pointer">
              <Monitor size={20} />
              14 inch, 1920 x 1080 Pixels, IPS, 60, Anti-Glare
            </h6>
            <h6 className="flex gap-1 items-center text-sm font-bold text-input cursor-pointer">
              <Cpu size={20} />
              AMD, Ryzen 5, 7520U
            </h6>
            <h6 className="flex gap-1 items-center text-sm font-bold text-input cursor-pointer">
              <MemoryStick size={20} />8 GB (1 thanh 8 GB), DDR4
            </h6>
            <h6 className="flex gap-1 items-center text-sm font-bold text-input cursor-pointer">
              <HardDrive size={20} />
              SSD 256 GB
            </h6>
            <p className="font-bold text-xs leading-[1.4] cursor-pointer text-accent transition-all hover:underline">
              Xem chi tiết thông số kỹ thuật
            </p>
          </div>
          {/* Assurance */}
          <div className="mt-[26px] mr-[16px] pt-[12px] max-w-[585px]">
            <ul className="flex flex-wrap">
              <li className="pr-[20px] pb-2 flex items-center gap-2 w-[50%] border-b-[1px] border-solid border-accent">
                <RefreshCcw />
                <p className="text-xs line-clamp-2 leading-5">
                  Hư gì đổi nấy{" "}
                  <span className="text-xs text-red">12 tháng</span> tại 3158
                  siêu thị toàn quốc (miễn phí tháng đầu){" "}
                  <span className="text-[13px] text-accent">Xem chi tiết</span>
                </p>
              </li>
              <li className="pr-[20px] pb-2 flex items-center gap-2 w-[50%] border-b-[1px] border-solid border-accent">
                <RefreshCcw />
                <p className="text-xs line-clamp-2 leading-5">
                  Hư gì đổi nấy{" "}
                  <span className="text-xs text-red">12 tháng</span> tại 3158
                  siêu thị toàn quốc (miễn phí tháng đầu){" "}
                  <span className="text-[13px] text-accent">Xem chi tiết</span>
                </p>
              </li>
              <li className="mt-4 pr-[20px] pb-2 flex items-center gap-2 w-[50%]">
                <RefreshCcw />
                <p className="text-xs line-clamp-2 leading-5">
                  Hư gì đổi nấy{" "}
                  <span className="text-xs text-red">12 tháng</span> tại 3158
                  siêu thị toàn quốc (miễn phí tháng đầu){" "}
                  <span className="text-[13px] text-accent">Xem chi tiết</span>
                </p>
              </li>
              <li className="mt-4 pr-[20px] pb-2 flex items-center gap-2 w-[50%]">
                <RefreshCcw />
                <p className="text-xs line-clamp-2 leading-5">
                  Hư gì đổi nấy{" "}
                  <span className="text-xs text-red">12 tháng</span> tại 3158
                  siêu thị toàn quốc (miễn phí tháng đầu){" "}
                  <span className="text-[13px] text-accent">Xem chi tiết</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <div className="price flex items-center gap-2">
            <h2 className="text-accent font-bold text-2xl">10.490.000 ₫</h2>
            <h3 className="font-normal line-through text-sm">13.290.000 ₫</h3>
            <h3 className="font-normal text-sm text-red">-20%</h3>
          </div>
          <div className="mt-4 card flex gap-3 flex-col  bg-widget drop-shadow-main rounded-[6px] transition-all">
            <div className="px-[15px] py-[10px] border-solid border-b-min border-accent">
              <h4 className="text-sm">Khuyến mãi</h4>
              <p className="text-xs">
                Giá và khuyến mãi dự kiến áp dụng đến 23:00 | 01/05
              </p>
            </div>
            <div className="px-[15px] py-[10px] border-b-min border-accent border-dashed">
              <ul className="flex flex-col gap-4">
                <li className="text-xs flex items-center">
                  <span className="text-white dark:text-[#00193B] mr-1 text-xs flex items-center justify-center font-medium w-6 h-6 rounded-full bg-green border-[2px] border-background">
                    1
                  </span>
                  Giảm thêm 200.000đ cho Học sinh - Sinh viên (cấp THPT trở lên){" "}
                  <span className="font-bold text-xs leading-[1.4] cursor-pointer text-accent transition-all hover:underline">
                    Click xem chi tiết
                  </span>
                </li>
                <li className="text-xs flex items-center">
                  <span className="text-white dark:text-[#00193B] mr-1 text-xs flex items-center justify-center font-medium w-6 h-6 rounded-full bg-green border-[2px] border-background">
                    2
                  </span>
                  Nhập mã VNPAYTGDD2 giảm ngay 1% (tối đa 200.000đ)
                  <span className="font-bold text-xs leading-[1.4] cursor-pointer text-accent transition-all hover:underline">
                    (Xem chi tiết tại đây)
                  </span>
                </li>
              </ul>
            </div>
            <ul className="flex flex-col gap-4 px-[20px] py-[10px]">
              <li className="text-xs flex items-center">
                Giá hoặc khuyến mãi không áp dụng trả góp lãi suất đặc biệt (0%,
                0.5%, 1%, 1.5%, 2%)
              </li>
            </ul>
          </div>
          <div className="location mt-3 flex items-center gap-1">
            <LocateFixed size={18} />
            <p className="font-normal text-xs ">
              <span className="font-bold text-[12px] leading-[1.4] cursor-pointer text-accent transition-all hover:underline">
                Chọn địa chỉ nhận hàng
              </span>{" "}
              để biết thời gian giao.
            </p>
          </div>
          <div className="btn mt-4 flex gap-3">
            <Button className="text-white dark:text-[#00193B] flex-1 hover:bg-[#02A189] = bg-[#00BA9D] border-min border-solid border-[#01C8A9] text-sm font-semibold">
              Mua ngay
            </Button>
            <Button className="text-white dark:text-[#00193B] bg-red flex-1 border-min border-solid border-red text-sm font-semibold">
              Thêm vào giỏ hàng
            </Button>
          </div>
          <div className="max-w-[465px] mt-4 px-[20px] py-[15px] bg-widget drop-shadow-main rounded-[6px] ">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-base w-[200px] mb-4">
                    Thông số kỹ thuật
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">CPU</TableCell>
                  <TableCell className="text-left">i3, 1115G4, 3GHz</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Màn hình</TableCell>
                  <TableCell className="text-left">
                    14 inch, 1920 x 1080 Pixels, IPS, 60, Anti-Glare
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
