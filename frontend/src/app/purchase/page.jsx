import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import test from "@/app/assets/img/10.webp";
import { Button } from "@/components/ui/button";
export default function Purchase() {
  return (
    <div>
      <div className="flex items-center justify-between pt-[10px] pb-[15px] mb-[16px] min-h-[57px] mt-5 border-b-[1px] border-solid border-inputBorder">
        <h1 className="text-2xl">Đơn hàng</h1>
      </div>
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="w-full flex items-center justify-start gap-5 bg-widget">
          <TabsTrigger value="1">Tất cả</TabsTrigger>
          <TabsTrigger value="2">Hoàn thành</TabsTrigger>
          <TabsTrigger value="3">Đã hủy</TabsTrigger>
        </TabsList>
        <TabsContent className="bg-widget" value="1">
          <div className="flex flex-col gap-2">
            <div className=" p-[24px] flex items-center justify-between border-b-min border-solid border-accent">
              <div className="flex items-center">
                <Image
                  width={80}
                  height={80}
                  src={test}
                  alt="thumb_product"
                  className="rounded"
                />
                <div className="flex flex-col pl-3 ">
                  <div>
                    Chuột chơi game, chuột máy tính G102 Led RGB 8000 DPI Siêu
                    nhạy
                  </div>
                  <div>x1</div>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <div>
                  <span className="line-through">₫185.000</span>
                  <span className="text-accent">₫65.000</span>
                </div>
                <div>
                  <Button className="text-white dark:text-[#00193B] flex-1 hover:bg-[#02A189] bg-[#00BA9D] border-min border-solid border-[#01C8A9] text-sm font-semibold">
                    Mua lại
                  </Button>
                </div>
              </div>
            </div>
            <div className=" p-[24px] flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  width={80}
                  height={80}
                  src={test}
                  alt="thumb_product"
                  className="rounded"
                />
                <div className="flex flex-col pl-3 ">
                  <div>
                    Chuột chơi game, chuột máy tính G102 Led RGB 8000 DPI Siêu
                    nhạy
                  </div>
                  <div>x1</div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <span className="line-through">₫185.000</span>
                <span className="text-accent">₫65.000</span>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="2">Change your password here.</TabsContent>
        <TabsContent value="3">Make changes to your account here.</TabsContent>
      </Tabs>
    </div>
  );
}
