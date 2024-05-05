import React from "react";
import { columns } from "./column";
import { DataTable } from "./data-table";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
export default function Cart() {
  return (
    <div className="sm:px-4 px-1">
      <Header />
      <div className="flex items-center justify-between pt-[10px] pb-[15px] mb-[16px] min-h-[57px] mt-5 border-b-[1px] border-solid border-inputBorder">
        <h1 className="text-2xl">Shopping Cart</h1>
      </div>
      <div className="w-full">
        <div className="bg-widget rounded-md  drop-shadow-main">
          <DataTable columns={columns} />
        </div>
        <div className="flex justify-end items-center gap-3 my-5">
          <h1 className="text-xl">Total : 10.490.000 ₫</h1>
          <Button className="text-white dark:text-[#00193B] w-[210px] bg-red border-min border-solid border-red text-sm font-semibold hover:bg-red">
            Check out
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}