"use client";
import BrandApiRequest from "@/apiRequests/brand";
import cardApiRequest from "@/apiRequests/card";
import cpuApiRequest from "@/apiRequests/cpu";
import diskApiRequest from "@/apiRequests/disk";
import ramApiRequest from "@/apiRequests/ram";
import screenResolutionApiRequest from "@/apiRequests/screenResolution";
import screenSizeApiRequest from "@/apiRequests/screenSize";
import ItemFilter from "@/components/ItemFilter";
import ListFilterFollow from "@/components/ListFilterFollow";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LIST_FILTER, renderFilter } from "@/constants";
import { ArrowDownNarrowWide, ArrowUpNarrowWide } from "lucide-react";
import { useEffect, useState } from "react";

export default function FilterProperty({ onClick, onClickPrice }) {
  const [data, setData] = useState();
  const [price, setPrice] = useState("-price");
  useEffect(() => {
    const fetchApi = async () => {
      const disk = await diskApiRequest.getAll();
      const ram = await ramApiRequest.getAll();
      const cpu = await cpuApiRequest.getAll();
      const brand = await BrandApiRequest.getAllBrands();
      const screenSize = await screenSizeApiRequest.getAll();
      const screenResolution = await screenResolutionApiRequest.getAll();
      const card = await cardApiRequest.getAll();
      const result = renderFilter(
        disk.data,
        ram.data,
        cpu.data,
        screenSize.data,
        screenResolution.data,
        card.data,
        brand.data
      );
      setData(result);
    };
    fetchApi();
  }, []);

  const handleShowResult = (newData) => {
    onClick([newData]);
    setData(() => {
      const data = [newData].map((item) => item);
      return [...data];
    });
  };
  const handleClickPrice = (value) => {
    setPrice(value);
    onClickPrice(value);
  };
  return (
    <div>
      <div className="mt-10">
        <h6 className="text-base font-bold mb-2">Chọn theo tiêu chí</h6>
        <div className="flex items-center">
          {data &&
            data.map((filter, idx) => {
              return (
                <ItemFilter
                  onClick={handleShowResult}
                  key={idx}
                  filter={filter}
                />
              );
            })}
        </div>
      </div>
      {data && <ListFilterFollow onClick={handleShowResult} data={data} />}
      <div className="mt-3">
        <h6 className="text-base font-bold">Sắp xếp theo</h6>
        <div>
          <Tabs
            value={price}
            onValueChange={handleClickPrice}
            defaultValue="-price"
          >
            <TabsList className="mt-3 flex  items-center justify-start">
              <TabsTrigger
                className="drop-shadow-main flex items-center text-xs font-normal gap-1 cursor-pointer rounded-[10px] h-[34px] py-[5px] px-[10px] mb-[10px] mr-[10px] bg-widget"
                value="-price"
              >
                <ArrowDownNarrowWide size={16} />
                Giá Cao - Thấp
              </TabsTrigger>
              <TabsTrigger
                className="drop-shadow-main flex items-center text-xs font-normal gap-1 cursor-pointer rounded-[10px] h-[34px] py-[5px] px-[10px] mb-[10px] mr-[10px] bg-widget"
                value="price"
              >
                <ArrowUpNarrowWide size={16} />
                Giá Thấp - Cao
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
