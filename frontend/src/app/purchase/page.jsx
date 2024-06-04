import React, { Suspense, lazy } from "react";

import Loading from "@/app/loading";

const Payment = lazy(() => import("@/app/purchase/_components/Payment"));

export default function Purchase() {
  return (
    <div>
      <div className="flex items-center justify-between pt-[10px] pb-[15px] mb-[16px] min-h-[57px] mt-5 border-b-[1px] border-solid border-inputBorder">
        <h1 className="text-2xl">Đơn hàng</h1>
      </div>
      <Suspense fallback={<Loading />}>
        <Payment />
      </Suspense>
    </div>
  );
}
