"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import test from "@/app/assets/img/10.webp";
import { Button } from "@/components/ui/button";
import paymentApiRequest from "@/apiRequests/payment";
import { formatPrice } from "@/lib/utils";
import empty from "@/app/assets/img/other/empty.png";
import CustomDeleteDialog from "@/components/CustomDeleteDialog";
export default function Purchase() {
  const [filterListPayment, setFilterListPayment] = useState([]);
  const [listPayment, setListPayment] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [statePayment, setStatePayment] = useState("all");
  useEffect(() => {
    const fetchApi = async () => {
      const userId = JSON.parse(localStorage.getItem("user"))._id;
      const { data } = await paymentApiRequest.getPayment(userId);
      setListPayment(data);
      setFilterListPayment(data);
      setDataLoaded(true);
    };
    fetchApi();
  }, []);
  const handleStatePaymentChange = (value) => {
    setStatePayment(value);
    let filteredPayments = [];
    if (value === "all") {
      filteredPayments = listPayment;
    } else {
      filteredPayments = listPayment.filter((item) => item.state === value);
    }
    setFilterListPayment(filteredPayments);
  };
  const handleDestroyPayment = async (id) => {
    const newList = listPayment.map((item) => {
      if (item._id === id) {
        return { ...item, state: "failed" };
      } else {
        return item;
      }
    });
    setListPayment(newList);
    setFilterListPayment(newList);
    const result = await paymentApiRequest.updatePayment(id, {
      state: "failed",
    });
  };
  return (
    <div>
      <div className="flex items-center justify-between pt-[10px] pb-[15px] mb-[16px] min-h-[57px] mt-5 border-b-[1px] border-solid border-inputBorder">
        <h1 className="text-2xl">Đơn hàng</h1>
      </div>
      <Tabs
        value={statePayment}
        onValueChange={handleStatePaymentChange}
        className="w-full"
      >
        <TabsList className="w-full flex items-center justify-start gap-5 bg-widget">
          <TabsTrigger value="all">Tất cả</TabsTrigger>
          <TabsTrigger value="pending">Chờ thanh toán</TabsTrigger>
          <TabsTrigger value="completed">Hoàn thành</TabsTrigger>
          <TabsTrigger value="failed">Đã hủy</TabsTrigger>
        </TabsList>
        <TabsContent className="bg-widget" value={statePayment}>
          {dataLoaded && filterListPayment.length > 0 ? (
            <div className="flex flex-col gap-2">
              {listPayment &&
                filterListPayment.map((itemParent, idx) => {
                  const products = itemParent.detail_payment;
                  const paymentDetail = products.map((item, index) => {
                    const product = item.productId;
                    return (
                      <div
                        key={index}
                        className="p-[24px] flex items-center justify-between"
                      >
                        <div className="flex items-center">
                          <Image
                            width={80}
                            height={80}
                            src={product.thumbs[0].thumb_url}
                            alt="thumb_product"
                            className="rounded"
                          />
                          <div className="flex flex-col pl-3 gap-2">
                            <div>{product.name}</div>
                            <div>x{item.quantity}</div>
                            <span className="text-xs font-normal text-gray">
                              Địa chỉ : {itemParent.name} ({itemParent.phone}){" "}
                              {itemParent.location} {itemParent.address}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-5 items-center">
                          <div>
                            <span className="text-accent">
                              {formatPrice(product.price * item.quantity)}
                            </span>
                          </div>
                          <div>
                            {itemParent.state === "pending" ? (
                              <CustomDeleteDialog
                                onClick={() =>
                                  handleDestroyPayment(itemParent._id)
                                }
                                Component={
                                  <Button className="text-white  dark:text-[#00193B] bg-red hover:bg-red flex-1 border-min border-solid border-red text-sm font-semibold">
                                    Huỷ đơn hàng
                                  </Button>
                                }
                                title="Bạn chắc có chắc hủy đơn hàng này không ?"
                              />
                            ) : itemParent.state !== "failed" ? (
                              <Button className="text-white w-[124px] dark:text-[#00193B] flex-1 hover:bg-[#02A189] bg-[#00BA9D] border-min border-solid border-[#01C8A9] text-sm font-semibold">
                                Mua lại
                              </Button>
                            ) : (
                              <Button className="text-white w-[124px]  dark:text-[#00193B] bg-red hover:bg-red flex-1 border-min border-solid border-red text-sm font-semibold">
                                Đã hủy
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  });
                  return (
                    <div
                      key={idx}
                      className="border-b-min border-solid border-accent"
                    >
                      {paymentDetail}
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 p-4">
              <Image src={empty} alt="empty" className="w-[100px] h-[100px]" />
              <p className="text-header font-normal text-normal">
                Chưa có đơn hàng
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
