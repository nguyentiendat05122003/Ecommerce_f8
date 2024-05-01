import { Button } from "@/components/ui/button";
import Image from "next/image";
import review from "../../img/icons/review.png";
export default function Review() {
  return (
    <div className="w-full card mt-10 flex gap-3 flex-col px-[20px] py-[15px] bg-widget drop-shadow-main rounded-[6px] transition-all">
      <div className=" py-[10px] border-solid border-b-min border-accent">
        <h4 className="text-base">Đánh giá sản phẩm</h4>
      </div>
      <div className="p-[24px] flex flex-col items-center justify-center ">
        <Image className=" w-[126px]" src={review} alt="review" />
      </div>
      <div className="text-md font-medium text-center">
        Hãy là người đầu tiên đánh giá sản phẩm này
      </div>
      <Button className="m-auto max-w-[138px] mt-[8px] bg-red text-white dark:text-[#00193B] h-[36px] px-[16px] ">
        GỬI ĐÁNH GIÁ
      </Button>
    </div>
  );
}
