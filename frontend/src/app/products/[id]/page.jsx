import Comment from "@/app/products/_components/Comment";
import InfoDetail from "@/app/products/_components/InfoDetail";
import InfoProduct from "@/app/products/_components/InfoProduct";
import Insurance from "@/app/products/_components/Insurance";
import Promotion from "@/app/products/_components/Promotion";
import Review from "@/app/products/_components/Review";
import Slider from "@/app/products/_components/Slider";
import { Button } from "@/components/ui/button";
import { CirclePlus, LocateFixed, Star } from "lucide-react";
export default function ProductDetail() {
  return (
    <div>
      <div className="flex items-center justify-between pt-[10px] pb-[15px] mb-[16px] min-h-[57px] mt-5 border-b-[1px] border-solid border-inputBorder">
        <h1 className="text-lg">
          Laptop HP 245 G10 R5-7520U/8GB/256GB/14"FHD/Win11 (9H8X8PT)
        </h1>
        <div className="flex items-center justify-between gap-3">
          <div className="sm:flex hidden">
            <Star size={18} fill="#F8D518" strokeWidth={0} />
            <Star size={18} fill="#F8D518" strokeWidth={0} />
            <Star size={18} fill="#F8D518" strokeWidth={0} />
            <Star size={18} fill="#F8D518" strokeWidth={0} />
            <Star size={18} fill="rgb(225, 224, 224)" strokeWidth={0} />
          </div>
          <p className="md:block hidden font-bold text-sm leading-[1.4] text-accent">
            32 rating
          </p>
          <span className="md:block hidden">|</span>
          <p className="md:block hidden font-bold text-sm leading-[1.4] text-accent">
            1 Hỏi & đáp
          </p>
          <p className="hidden xl:flex  items-center font-bold text-sm leading-[1.4] text-accent gap-1">
            <CirclePlus />
            <span>So sánh</span>
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="hidden xl:w-[50%] xl:block">
          {/* Slider */}
          <Slider />
          {/* info */}
          <InfoProduct />
          {/* Assurance */}
          <Insurance />
        </div>
        <div className="flex-1">
          <div className="price flex items-center gap-2">
            <h2 className="text-accent font-bold text-2xl">10.490.000 ₫</h2>
            <h3 className="font-normal line-through text-sm">13.290.000 ₫</h3>
            <h3 className="font-normal text-sm text-red">-20%</h3>
          </div>
          <Promotion />
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
            <Button className="text-white dark:text-[#00193B] flex-1 hover:bg-[#02A189] bg-[#00BA9D] border-min border-solid border-[#01C8A9] text-sm font-semibold">
              Mua ngay
            </Button>
            <Button className="text-white dark:text-[#00193B] bg-red hover:bg-red flex-1 border-min border-solid border-red text-sm font-semibold">
              Thêm vào giỏ hàng
            </Button>
          </div>
          <InfoDetail />
        </div>
      </div>
      <Review />
      <Comment />
    </div>
  );
}
