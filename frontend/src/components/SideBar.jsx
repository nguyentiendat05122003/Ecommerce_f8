import { Checkbox } from "@/components/ui/checkbox";
import { Filter, List } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SideBar() {
  return (
    <div className="sidebar w-[220px] rounded bg-widget p-5 drop-shadow-main">
      <div className="filter-panel ">
        <div className="flex items-center">
          <List />
          <h5 className="pl-[12px]">All categories</h5>
        </div>
        <div className="menu_divider h-[1px] bg-border mt-4"></div>
        <div className="category-list flex flex-col gap-2.5 mt-4">
          <ul className="">
            <li className="border-min border-transparent rounded-sm flex items-center justify-start h-[40px] pr-[18px] pl-[12px] cursor-pointer transition-all text-base font-bold hover:bg-background hover:text-input hover:border-border hover:border-min">
              <Link href="/">Máy văn phòng</Link>
            </li>
            <li className="border-min border-transparent rounded-sm flex items-center justify-start h-[40px] pr-[18px] pl-[12px] cursor-pointer transition-all text-base font-bold hover:bg-background hover:text-input hover:border-border hover:border-min">
              <Link href="/">Máy văn phòng</Link>
            </li>
          </ul>
        </div>
        <div className="menu_divider h-[1px] bg-border my-4"></div>
        <div className="flex items-center">
          <Filter />
          <h5 className="pl-[12px]">All Filters</h5>
        </div>
        <div className="filter-list flex flex-col gap-2.5 mt-4">
          <ul className="">
            <li className="border-min border-transparent rounded-sm flex items-center justify-start h-[40px] pr-[18px] pl-[12px] cursor-pointer transition-all text-base font-bold hover:bg-background hover:text-input hover:border-border hover:border-min">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Lenovo
                </label>
              </div>
            </li>
            <li className="border-min border-transparent rounded-sm flex items-center justify-start h-[40px] pr-[18px] pl-[12px] cursor-pointer transition-all text-base font-bold hover:bg-background hover:text-input hover:border-border hover:border-min">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Lenovo
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div className="menu_divider h-[1px] bg-border my-4"></div>
        <div className="flex items-center">
          <h5 className="pl-[12px]">Price</h5>
        </div>
        <div className="price-list">
          <div className="flex gap-2 mt-4">
            <Input type="text" placeholder="From" />
            <Input type="text" placeholder="To" />
          </div>
          <Button variant="secondary" className="bg-red mt-3 w-full">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
