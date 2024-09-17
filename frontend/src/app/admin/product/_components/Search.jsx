"use client";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React from "react";

export default function SearchComp({
  className,
  placeholder,
  onChange,
  search,
  defaultValue,
}) {
  return (
    <div className="hidden relative sm:block ml-5  4xl:ml-0">
      <input
        className={`hover:transition-all focus:border-accent hover:border-accent bg-transparent w-full field-input outline-none !pr-[60px] h-searchHeight px-[20px] rounded-lg border-min border-solid ${
          className ? className : ""
        }`}
        defaultValue={defaultValue}
        onChange={(e) => onChange(e.target.value)}
        type="search"
        placeholder={placeholder}
      />
      <Button
        className="hover:bg-transparent absolute right-3 top-1/2 -translate-y-2/4"
        variant="ghost"
        size="icon"
      >
        <Search size={18} />
      </Button>
    </div>
  );
}
