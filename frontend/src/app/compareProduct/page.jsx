"use client";
import Image from "next/image";
import React from "react";
import test from "../../app/assets/img/10.webp";
import { CircleChevronDown, Plus, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useAppSelector } from "@/lib/hook";
import { formatPrice } from "@/lib/utils";
export default function CompareProductPage() {
  const listProductCompare = useAppSelector(
    (state) => state.listProductCompare.listProduct
  );
  return (
    <>
      <ul className="grid grid-cols-4 mt-[30px]  drop-shadow-main bg-widget rounded">
        <li className="border-r-min border-solid p-4 border-inputBorder">
          <p className="text-base text-header font-normal">So sánh sản phẩm</p>
          <div className="font-bold flex flex-col gap-4 text-base mt-[10px] uppercase text-accent">
            {listProductCompare.map((item, index) => {
              return (
                <p
                  className={`${
                    item.name && index
                      ? "before:content-['&'] before:block before:mb-1 before:text-header"
                      : ""
                  } line-clamp-4`}
                  key={item._id}
                >
                  {item.name}
                </p>
              );
            })}
          </div>
        </li>
        {listProductCompare.map((item) => {
          if (item.name) {
            return (
              <li
                key={item._id}
                className="border-min border-b-0 border-l-0 border-solid p-4 border-inputBorder flex flex-col gap-1 "
              >
                <Image
                  width={250}
                  height={100}
                  className="max-w-[275px] rounded"
                  src={item.thumbs[0].thumb_url}
                  alt="test"
                />
                <h3 className="text-sm line-clamp-2 text-header p-l-[15px] p-b-[3px] ">
                  {item.name}
                </h3>
                <div className="flex gap-2">
                  <p className="line-through font-normal text-xs text-[#999] m-r-[5px]">
                    {formatPrice(item.price)}
                  </p>
                  <span className="text-xs m-r-[5px] ">-19%</span>
                </div>
                <span className="font-bold text-sm text-accent ">
                  10.990.000₫
                </span>
                <div className="flex items-center gap-1">
                  {}
                  <p className="flex">
                    <Star size={18} fill="#F8D518" strokeWidth={0} />
                    <Star size={18} fill="#F8D518" strokeWidth={0} />
                    <Star size={18} fill="#F8D518" strokeWidth={0} />
                    <Star size={18} fill="#F8D518" strokeWidth={0} />
                    <Star size={18} fill="rgb(225, 224, 224)" strokeWidth={0} />
                  </p>
                  <p className="text-xs font-normal">16</p>
                </div>
              </li>
            );
          } else {
            return (
              <li
                key={item._id}
                className="border-min border-b-0 border-l-0 border-solid p-4 border-inputBorder flex flex-col gap-2 "
              >
                <div className="flex w-full h-full items-center justify-center flex-col gap-1">
                  <div className="w-[60px] h-[60px] border-min border-dashed border-inputBorder flex items-center justify-center">
                    <Plus color="#2f80ed" />
                  </div>
                  <p className="font-normal text-xs">Thêm sản phẩm</p>
                </div>
              </li>
            );
          }
        })}
      </ul>
      <Accordion
        type="single"
        collapsible
        defaultValue="open"
        className="w-full"
      >
        <AccordionItem value="open">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <CircleChevronDown size={18} />
              <p className="uppercase text-xs font-bold">So sánh nhanh</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="grid grid-cols-4 mt-[30px]   drop-shadow-main bg-widget rounded border-min border-solid border-inputBorder">
              <li className="border-r-min border-solid p-4 border-inputBorder">
                <p className="px-[10px] py-3 text-sm font-normal">
                  So sánh nhanh
                </p>
              </li>
              <li className="border-r-min ml-3 border-solid p-4 border-inputBorder">
                <ul className="list-disc">
                  <li className="px-[10px] py-3 text-sm font-normal">
                    CPU: i3, 1215U, 1.2GHz
                  </li>
                  <li className="px-[10px] py-3 text-sm font-normal">
                    RAM: 8 GB, DDR4 2 khe (1 khe 8 GB + 1 khe rời), 3200 MHz
                  </li>
                  <li className="px-[10px] py-3 text-sm font-normal">
                    Ổ cứng: 512 GB SSD NVMe PCIe
                  </li>
                </ul>
              </li>
              <li className="border-r-min ml-3 border-solid p-4 border-inputBorder">
                <ul className="list-disc">
                  <li className="px-[10px] py-3 text-sm font-normal">
                    CPU: i3, 1215U, 1.2GHz
                  </li>
                  <li className="px-[10px] py-3 text-sm font-normal">
                    RAM: 8 GB, DDR4 2 khe (1 khe 8 GB + 1 khe rời), 3200 MHz
                  </li>
                  <li className="px-[10px] py-3 text-sm font-normal">
                    Ổ cứng: 512 GB SSD NVMe PCIe
                  </li>
                </ul>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
