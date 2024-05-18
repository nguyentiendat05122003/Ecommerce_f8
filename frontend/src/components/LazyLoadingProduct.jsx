import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function LazyLoadingProduct({ number }) {
  return (
    <div
      className="grid gap-[26px] mt-2 mb-[30px] sm:grid-cols-2 md:grid-cols-3 md:mt-7
    lg:grid-cols-5 2xl:grid-cols-6"
    >
      {[...Array(number)].map((item, idx) => (
        <Skeleton key={idx} className="h-[478px] w-[228px] rounded-xl" />
      ))}
    </div>
  );
}
