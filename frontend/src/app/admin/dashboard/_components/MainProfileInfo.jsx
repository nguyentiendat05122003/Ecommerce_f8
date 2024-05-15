import Counter from "@/components/Counter";
import Logo from "@/components/Logo";
import {
  CircleChevronUp,
  CircleDollarSign,
  Gem,
  Info,
  ScanBarcode,
} from "lucide-react";
export default function MainProfileInfo() {
  return (
    <div className="bg-widget rounded-sm drop-shadow-main flex flex-col gap-4 md:flex-row md:p-[26px] lg:col-span-3 xl:col-span-2 2xl:col-span-1 transition-all">
      <div
        className="h-[230px] rounded-md bg-background border border-inputBorder p-5 flex flex-col items-center
                 justify-center gap-6 shrink-0 md:w-[190px]"
      >
        <Logo className="h-20 w-auto ml-2.5" textOnly="" />
        <span className="font-heading font-bold text-xl leading-[1.1] text-header">
          ShopPoint
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-[28px] text-header">ShopPoint - Retail</h3>
          <p>
            Aliquam erat volutpat. Duis molestie ultrices tempus. Mauris sem
            orci, euismod sit amet.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <h5 className="text-xl text-header">Average Rate 2023</h5>
            <Info color="#4F89FC" size={20} />
          </div>
          <div className="flex-1 grid grid-cols-1 gap-6 md:grid-cols-2 lg:flex justify-between xl:max-w-[670px]">
            <div className="flex gap-5">
              <div className="bg-green w-[46px] h-[46px] rounded-md text-widget flex shrink-0 items-center justify-center">
                <Gem size={30} className="mt-1" />
              </div>
              <div>
                <span className="relative block -mt-1 font-heading font-semibold leading-[1.1] text-header text-[26px] md:text-[32px]">
                  <Counter
                    className="relative block -mt-1 font-heading font-semibold leading-[1.1] text-header text-[26px] md:text-[32px]"
                    num={15412}
                    prefix="$"
                  />
                </span>
                <span className="block text-sm font-bold mb-2">Income</span>
                <div className="flex gap-2 text-sm font-heading font-bold  text-green">
                  <CircleChevronUp size={20} color="#00BA9D" />
                  <span className="text-sm font-bold">+45.21%</span>
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="bg-red w-[46px] h-[46px] rounded-md text-widget flex shrink-0 items-center justify-center">
                <CircleDollarSign size={30} className="mt-1" />
              </div>
              <div>
                <span className="relative block -mt-1 font-heading font-semibold leading-[1.1] text-header text-[26px] md:text-[32px]">
                  <Counter
                    className="relative block -mt-1 font-heading font-semibold leading-[1.1] text-header text-[26px] md:text-[32px]"
                    num={15412}
                    prefix="$"
                  />
                </span>
                <span className="block text-sm font-bold mb-2">Income</span>
                <div className="flex gap-2 text-sm font-heading font-bold  text-red">
                  <CircleChevronUp size={20} color="#FF5470" />
                  <span className="text-sm font-bold">+45.21%</span>
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="bg-accent w-[46px] h-[46px] rounded-md text-widget flex shrink-0 items-center justify-center">
                <ScanBarcode size={30} className="mt-1" />
              </div>
              <div>
                <span className="relative block -mt-1 font-heading font-semibold leading-[1.1] text-header text-[26px] md:text-[32px]">
                  <Counter
                    className="relative block -mt-1 font-heading font-semibold leading-[1.1] text-header text-[26px] md:text-[32px]"
                    num={15412}
                    prefix="$"
                  />
                </span>
                <span className="block text-sm font-bold mb-2">Income</span>
                <div className="flex gap-2 text-sm font-heading font-bold  text-green">
                  <CircleChevronUp size={20} color="#00BA9D" />
                  <span className="text-sm font-bold">+45.21%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}