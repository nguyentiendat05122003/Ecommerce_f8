"use client";
import Counter from "@/components/Counter";
import LogoDark from "../../../../app/assets/img/icons/logo_dark.svg";

import {
  CircleChevronUp,
  CircleDollarSign,
  Gem,
  Info,
  ScanBarcode,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import statisticalApiRequest from "@/apiRequests/statistical";
import { formatPrice } from "@/lib/utils";
export default function MainProfileInfo() {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      const data = await statisticalApiRequest.getTotalAmount();
      setData(data);
    };
    fetchApi();
  }, []);
  return (
    <div className="bg-widget rounded-sm drop-shadow-main flex flex-col gap-4 md:flex-row md:p-[26px]  transition-all">
      <div
        className="h-[230px] rounded-md bg-background border border-inputBorder p-5 flex flex-col items-center
                 justify-center gap-6 shrink-0 md:w-[190px]"
      >
        <Link className="w-auto flex items-center" href="/">
          <Image
            className=""
            src={LogoDark}
            width="100"
            height="100"
            alt="logo"
            priority={true}
          />
        </Link>
        <span className="font-heading font-bold text-xl leading-[1.1] text-header">
          ShopPoint
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-[28px] text-header"> Thống Kê</h3>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <h5 className="text-xl text-header">Trung bình 2024</h5>
            <Info color="#4F89FC" size={20} />
          </div>
          <div className="flex-1 grid grid-cols-1 gap-6 md:grid-cols-2 lg:flex justify-between xl:max-w-[670px]">
            <div className="flex gap-5">
              <div className="bg-green w-[46px] h-[46px] rounded-md text-widget flex shrink-0 items-center justify-center">
                <Gem size={30} className="mt-1" />
              </div>
              <div>
                <span className="relative block -mt-1 font-heading font-semibold leading-[1.1] text-header text-[26px] md:text-[32px]">
                  {data && formatPrice(data.payment)}
                </span>
                <span className="block text-sm font-bold mb-2">
                  Tổng tiền bán hàng
                </span>
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
                  {data && formatPrice(data.import)}
                </span>
                <span className="block text-sm font-bold mb-2">
                  Tổng tiền nhập hàng
                </span>
                <div className="flex gap-2 text-sm font-heading font-bold  text-red">
                  <CircleChevronUp size={20} color="#FF5470" />
                  <span className="text-sm font-bold">+2.21%</span>
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="bg-accent w-[46px] h-[46px] rounded-md text-widget flex shrink-0 items-center justify-center">
                <ScanBarcode size={30} className="mt-1" />
              </div>
              <div>
                <span className="relative block -mt-1 font-heading font-semibold leading-[1.1] text-header text-[26px] md:text-[32px]">
                  {data && formatPrice(data.payment - data.import)}
                </span>
                <span className="block text-sm font-bold mb-2">Lãi</span>
                <div className="flex gap-2 text-sm font-heading font-bold  text-green">
                  <CircleChevronUp size={20} color="#00BA9D" />
                  <span className="text-sm font-bold">+1.21%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
