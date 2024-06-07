"use client";
import paymentApiRequest from "@/apiRequests/payment";
import empty from "@/app/assets/img/other/empty.png";
import Loading from "@/app/loading";
import CustomDeleteDialog from "@/components/CustomDeleteDialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatPrice } from "@/lib/utils";
import { socket } from "@/socket";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Payment() {
  const [filterListPayment, setFilterListPayment] = useState([]);
  const [listPayment, setListPayment] = useState([]);
  const [statePayment, setStatePayment] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const userId = JSON.parse(localStorage.getItem("user"))._id;
      const { data } = await paymentApiRequest.getPayment(userId);
      setListPayment(data);
      setFilterListPayment(data);
      setLoading(false);
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
    await paymentApiRequest.updatePayment(id, {
      state: "failed",
    });
    const user = JSON.parse(localStorage.getItem("user"));
    socket.emit("sendDestroyPayment", {
      sender: user,
      payment: id,
    });
  };

  return (
    <Tabs
      value={statePayment}
      onValueChange={handleStatePaymentChange}
      className="w-full"
    >
      <TabsList className="w-full flex items-center justify-start gap-5 bg-widget">
        <TabsTrigger value="all">Tất cả</TabsTrigger>
        <TabsTrigger value="pending">Chờ xác nhận</TabsTrigger>
        <TabsTrigger value="completed">Thành công</TabsTrigger>
        <TabsTrigger value="failed">Đã hủy</TabsTrigger>
      </TabsList>
      <TabsContent className="bg-widget" value={statePayment}>
        {loading ? (
          <div className="flex justify-center items-center -translate-y-1  m-auto h-[100px]">
            <Loading />
          </div>
        ) : filterListPayment.length > 0 ? (
          <div className="flex flex-col gap-2">
            {filterListPayment.map((itemParent, idx) => {
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
                      <div className="flex items-center gap-3">
                        {itemParent.state === "pending" ? (
                          <CustomDeleteDialog
                            onClick={() => handleDestroyPayment(itemParent._id)}
                            Component={
                              <Button className="text-white  dark:text-[#00193B] bg-red hover:bg-red flex-1 border-min border-solid border-red text-sm font-semibold">
                                Huỷ đơn hàng
                              </Button>
                            }
                            title="Bạn chắc có chắc hủy đơn hàng này không ?"
                          />
                        ) : itemParent.state !== "failed" ? (
                          <>
                            {itemParent.paid ? (
                              <span className="text-green">Đã thanh toán</span>
                            ) : (
                              <span className="text-red">Chưa thanh toán</span>
                            )}
                            <Button className="text-white w-[124px] dark:text-[#00193B] flex-1 hover:bg-[#02A189] bg-[#00BA9D] border-min border-solid border-[#01C8A9] text-sm font-semibold">
                              Mua lại
                            </Button>
                          </>
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
  );
}
