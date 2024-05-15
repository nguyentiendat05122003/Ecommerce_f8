import { CircleChevronUp } from "lucide-react";
export default function TotalReport() {
  return (
    <div className="p-[26px] bg-widget rounded-sm drop-shadow-main flex flex-col lg:col-span-3 xl:col-span-1">
      <div>
        <div className="flex items-center justify-between">
          <h4 className="text-2xl text-header">Total Report</h4>
        </div>
        <p className="mt-1.5 mb-4 text-sm md:text-base">
          All Periods per 01/01/2022 - 08/28/2023
        </p>
        <div className="flex flex-col flex-1 gap-6 mb-6">
          <div className="flex items-center justify-between rounded-md bg-body border p-[13px] md:py-0 md:px-[26px] md:h-[80px]">
            <h6 className="text-base text-header font-bold">Revenue</h6>
            <span className="h6 !text-sm">$176,120</span>
            <div className="flex gap-2 text-sm font-heading font-bold w-[90px] xs:flex text-green">
              <CircleChevronUp size={20} color="#00BA9D" />
              <span className="text-sm font-bold">+45.21%</span>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-md bg-body border p-[13px] md:py-0 md:px-[26px] md:h-[80px]">
            <h6 className="text-base text-header font-bold">Revenue</h6>
            <span className="h6 !text-sm">$176,120</span>
            <div className="flex gap-2 text-sm font-heading font-bold w-[90px] xs:flex text-green">
              <CircleChevronUp size={20} color="#00BA9D" />
              <span className="text-sm font-bold">+45.21%</span>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-md bg-body border p-[13px] md:py-0 md:px-[26px] md:h-[80px]">
            <h6 className="text-base text-header font-bold">Profit</h6>
            <span className="h6 !text-sm">$176,120</span>
            <div className="flex gap-2 text-sm font-heading font-bold w-[90px] xs:flex text-green">
              <CircleChevronUp size={20} color="#00BA9D" />
              <span className="text-sm font-bold">+45.21%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
