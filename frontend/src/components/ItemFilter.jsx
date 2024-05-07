"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChevronDown, CircleDollarSign, CircleHelp } from "lucide-react";
import { useState } from "react";
export default function ItemFilter({ filter }) {
  //active : text-red border-min border-red border-solid
  const [open, setOpen] = useState(false);
  const { id, title, Icon, desc, data } = filter;
  return title !== "Giá" ? (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="drop-shadow-main flex items-center text-xs font-normal gap-1 cursor-pointer rounded-[10px] h-[34px] py-[5px] px-[10px] mb-[10px] mr-[10px] bg-widget">
        {Icon && <Icon size={16} />}
        {title}
        <ChevronDown size={16} />
        {desc && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <CircleHelp size={16} />
              </TooltipTrigger>
              <TooltipContent className="bg-widget rounded">
                <p className="text-sm font-normal max-w-[200px]">{desc}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </PopoverTrigger>
      <PopoverContent
        className={`bg-widget rounded-lg ${id === 0 ? "w-[800px]" : ""}`}
      >
        {id !== 0 ? (
          <ul className="mb-3 flex items-center gap-2 flex-wrap">
            {data.map((item) => {
              return (
                <li
                  key={item.id}
                  className="text-xs font-normal border-min px-[10px] py-[5px] rounded-[10px]"
                >
                  {item.value}
                </li>
              );
            })}
          </ul>
        ) : (
          <>
            <div className="w-[800px] grid grid-cols-3 gap-1 p-3">
              {data.map((item, index) => {
                return (
                  <div key={index} className="">
                    <div className="flex items-center gap-1">
                      <span className="text-base font-bold">{item.title}</span>
                      {item.desc && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <CircleHelp size={16} />
                            </TooltipTrigger>
                            <TooltipContent className="bg-widget rounded">
                              <p className="text-sm font-normal max-w-[200px]">
                                {item.desc}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </div>
                    {
                      <ul className="mb-3 flex flex-wrap items-center gap-1">
                        {item.data.map((item) => {
                          return (
                            <li
                              key={item.id}
                              className="text-xs font-normal border-min px-[10px] py-[5px] rounded-[10px]"
                            >
                              {item.value}
                            </li>
                          );
                        })}
                      </ul>
                    }
                  </div>
                );
              })}
            </div>
          </>
        )}
        <div className="flex justify-end gap-1">
          <button
            onClick={() => {
              setOpen(false);
            }}
            className="bg-[#feecf0] rounded text-[#cc0f35] font-semibold text-sm w-[160px] px-[14px] py-[6px]"
          >
            Đóng
          </button>
          <button className="bg-red rounded text-white font-semibold text-sm w-[160px] px-[14px] py-[6px]">
            Xem kết quả
          </button>
        </div>
      </PopoverContent>
    </Popover>
  ) : (
    <Popover>
      <PopoverTrigger className="drop-shadow-main flex items-center text-xs font-normal gap-1 cursor-pointer rounded-[10px] h-[34px] py-[5px] px-[10px] mb-[10px] mr-[10px] bg-widget">
        <CircleDollarSign size={16} />
        Giá
      </PopoverTrigger>
      <PopoverContent className="bg-widget rounded-lg ">
        <div className="flex justify-between mb-3">
          <span>0đ</span>
          <span>110.000.000đ</span>
        </div>
        <Slider className="mb-3" defaultValue={[50]} max={100} step={1} />
        <div className="flex justify-end gap-1">
          <button className="bg-red rounded text-white font-semibold text-sm w-[160px] px-[14px] py-[6px]">
            Kết quả
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
