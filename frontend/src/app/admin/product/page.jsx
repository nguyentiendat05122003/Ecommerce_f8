"use client";
import SearchComp from "@/app/admin/product/_components/Search";
import { columns } from "@/app/admin/product/_components/column";
import { DataTable } from "@/components/DataTable";
import PageHeader from "@/components/PageHeader";
import PaginationComp from "@/components/Pagination";

import { CirclePlus, Trash } from "lucide-react";
export default function ProductManager() {
  return (
    <div>
      <PageHeader title="Products Management" />
      <div className="flex flex-col-reverse gap-4 mb-5 md:flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-4 md:flex-row md:gap-[14px]">
          <button className="bg-green border-min border-solid border-green text-white h-searchHeight rounded-[23px] flex items-center justify-center gap-[16px] text-base px-[26px] transition-all cursor-pointer font-semibold">
            Add new product <CirclePlus size={18} />
          </button>
          {/* <CSVLink
            className="border-min border-solid border-accent text-accent gap-[7px] bg-widget  rounded-[23px] flex items-center justify-center  text-base px-[26px] transition-all cursor-pointer font-semibold  !h-[44px]"
            data={[]}
          >
            Export CSV
            <FileInput size={18} />
          </CSVLink> */}
          <button className="bg-red border-min border-solid border-red text-white h-searchHeight rounded-[23px] flex items-center justify-center gap-[16px] text-base px-[26px] transition-all cursor-pointer font-semibold">
            Delete products <Trash size={18} />
          </button>
        </div>
        <SearchComp className="lg:w-[326px]" placeholder="Search Product" />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-header">Products:</span>
          <button className="pr-[14px] mr-[14px] border-right-[2px] border-solid border-header inline-flex items-center gap-[8px]">
            <span className="text-header text-sm font-bold ">All</span>
            <span className="text-[#E2E1E1] text-sm">(16)</span>
          </button>
        </div>
      </div>
      <div className="bg-widget rounded-md  drop-shadow-main">
        {/* <DataTable columns={columns} /> */}
      </div>
      <PaginationComp />
    </div>
  );
}
