"use client";
import { formatFilterFollow } from "@/utils/formatFilterFollow";
import { CircleX, X } from "lucide-react";
import { useEffect, useState } from "react";
export default function ListFilterFollow({ data, onClick }) {
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    const newData = data[0].data;
    let activeObjects = [];
    newData.forEach((item) => {
      const activeData = item.data.filter((dataItem) => dataItem.active);
      if (activeData.length > 0) {
        activeObjects.push({
          title: item.title,
          id: item.id,
          activeData: activeData.map((dataItem) => dataItem.value),
        });
      }
    });
    setFilter(activeObjects);
  }, [data]);
  const handleRemoveFilter = (itemClick) => {
    const updatedData = [...data[0].data];
    updatedData.forEach((group) => {
      group.data.forEach((item) => {
        if (itemClick.activeData.includes(item.value)) {
          item.active = false;
        }
      });
    });
    onClick({ ...data[0], data: updatedData });
  };
  return (
    <div className={`${filter.length > 0 ? "block" : "hidden"}`}>
      <h6 className="text-base font-bold">Đang lọc theo</h6>
      <div className="mt-3 flex  items-center justify-start">
        <div className="flex items-center gap-1">
          {filter.map((item, index) => {
            return (
              <button
                onClick={() => {
                  handleRemoveFilter(item);
                }}
                key={index}
                className="text-red border-min border-red border-solid drop-shadow-main flex items-center text-xs font-normal gap-1 cursor-pointer rounded-[10px] h-[34px] py-[5px] px-[10px] mb-[10px] mr-[10px] bg-widget"
              >
                <CircleX size={16} />
                {formatFilterFollow(item)}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
