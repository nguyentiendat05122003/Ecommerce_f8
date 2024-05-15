"use client";
import { useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import dayjs from "dayjs";
import { RefreshCcw } from "lucide-react";
export default function PageHeader({ title }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { width } = useWindowSize();
  const dateFormat = width < 768 ? "MM.DD.YYYY" : "MMMM DD, YYYY";
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [currentTime]);
  return (
    <>
      <div
        className="bg-widget rounded-sm drop-shadow-main  no-hover flex flex-col gap-5 !p-5 mb-5 md:mb-[26px] md:!p-[26px] lg:!py-5 lg:flex-row
                 lg:items-center lg:gap-4"
      >
        <h1 className="flex-1 text-[38px] text-header text-center lg:text-left">
          {title}
        </h1>
        <button
          className="w-fit xl:flex items-center gap-2 font-heading font-semibold
                        text-header text-sm"
        >
          Data Refresh
          <RefreshCcw size={18} color="#4F89FC" />
        </button>
        <div
          className="h-11 bg-background flex items-center justify-center rounded-md px-9 font-heading font-bold
                    text-header text-sm border border-inputBorder lg:w-[310px]"
        >
          {dayjs(currentTime).format(`${dateFormat} HH`)}
          <span className="animate-pulse-fast">:</span>
          {dayjs(currentTime).format("mm A")}
        </div>
      </div>
    </>
  );
}
