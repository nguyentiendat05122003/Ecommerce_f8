"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import Image from "next/image";
import review from "../../img/icons/review.png";
import test from "../../img/other/review.jpg";
import { useState } from "react";
import { RATING } from "@/constants";
export default function Review() {
  const [rating, setRating] = useState(RATING);
  const [active, setActive] = useState(false);
  const handleRating = (id) => {
    setRating((prev) => {
      const newRating = prev.map((item) => {
        if (item.id <= id) {
          return { ...item, active: true };
        } else {
          delete item["active"];
          return item;
        }
      });
      return newRating;
    });
  };
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

      <Dialog>
        <DialogTrigger asChild>
          <Button className="m-auto hover:bg-red max-w-[138px] mt-[8px] bg-red text-white dark:text-[#00193B] h-[36px] px-[16px] ">
            GỬI ĐÁNH GIÁ
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Đánh Giá Sản Phẩm</DialogTitle>
          </DialogHeader>
          <Image
            src={test}
            className="max-w-[100px] mx-auto rounded"
            alt="test"
          />
          <h3 className="text-center text-base font-semibold">
            Laptop MSI Modern 14 C11M i3 1115G4/8GB/512GB/Win11 (011VN)
          </h3>
          <ul className="flex items-center justify-center mt-[20px] gap-2">
            {rating.map((item, index) => {
              return (
                <li
                  onClick={() => {
                    handleRating(item.id);
                  }}
                  key={item.id}
                  className="flex flex-col items-center"
                >
                  <Star
                    color="#F8D518"
                    fill={item.active ? "#F8D518" : "transparent"}
                    strokeWidth={0.75}
                  />
                  <p
                    className={`text-xs font-bold ${
                      item.active ? "text-[#F8D518]" : ""
                    }`}
                  >
                    {item.value}
                  </p>
                </li>
              );
            })}
          </ul>
          <Textarea placeholder="Hãy chia sẻ cảm nhận của bạn về sản phẩm..." />
          <div className="flex items-center gap-2">
            <Input
              className="focus:border-accent h-searchHeight px-[10px] bg-background rounded-lg border-min border-solid border-inputBorder"
              type="text"
              id="name"
              name="name"
              placeholder="Họ tên (bắt buộc)"
            />
            <Input
              className="focus:border-accent h-searchHeight px-[10px] bg-background rounded-lg border-min border-solid border-inputBorder"
              type="text"
              id="phone"
              name="phone"
              placeholder="Số điện thoại (bắt buộc)"
            />
          </div>
          <DialogFooter>
            <Button className="bg-[#0071e3] cursor-default text-white hover:bg-[#0071e3] opacity-50">
              Gửi đánh giá
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
