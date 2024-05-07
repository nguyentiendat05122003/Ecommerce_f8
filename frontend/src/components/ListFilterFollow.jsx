"use client";
import { CircleX, X } from "lucide-react";
import { useState } from "react";
export default function ListFilterFollow({ data }) {
  const newData = data[0].data;
  console.log("newData", newData);
  const [filter, setFilter] = useState(() => {
    const listItem = newData.map((item) => {
      return item.data;
    });
    let newArr = [];
    listItem.forEach((item) => {
      newArr = newArr.concat(item);
    });
    const tmp = newArr.filter((item) => item.active === true);
    console.log(tmp);
    return tmp;
  });
  return (
    <div className="">
      <h6 className="text-base font-bold">Đang lọc theo</h6>
      <div className="mt-3 flex  items-center justify-start">
        <div className="flex items-center gap-1">
          {filter.map((item, index) => {
            return (
              <button
                key={index}
                className="drop-shadow-main flex items-center text-xs font-normal gap-1 cursor-pointer rounded-[10px] h-[34px] py-[5px] px-[10px] mb-[10px] mr-[10px] bg-widget"
              >
                <CircleX size={16} />
                {item.value}
              </button>
            );
          })}
        </div>
        <button className="drop-shadow-main flex items-center text-xs font-normal gap-1 cursor-pointer rounded-[10px] h-[34px] py-[5px] px-[10px] mb-[10px] mr-[10px] bg-widget">
          <X size={16} />
          Bỏ chọn tất cả
        </button>
      </div>
    </div>
  );
}
