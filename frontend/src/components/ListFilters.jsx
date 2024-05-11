"use client";
import ItemFilter from "@/components/ItemFilter";
import ListFilterFollow from "@/components/ListFilterFollow";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LIST_FILTER } from "@/constants";
import { ArrowDownNarrowWide, ArrowUpNarrowWide } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import test from "../app/assets/img/categories/1.png";
import { useState } from "react";
export default function ListFilters() {
  const [data, setData] = useState(LIST_FILTER);
  const handleShowResult = (newData) => {
    setData(() => {
      const data = [newData].map((item) => item);
      return [...data];
    });
  };
  return (
    <>
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
          {data.map((filter) => {
            return (
              <ItemFilter
                onClick={handleShowResult}
                key={filter.id}
                filter={filter}
              />
            );
          })}
        </div>
      </div>
      <ListFilterFollow onClick={handleShowResult} data={data} />
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
    </>
  );
}