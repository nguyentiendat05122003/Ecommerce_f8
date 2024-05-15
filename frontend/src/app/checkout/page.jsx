import { columns } from "@/app/checkout/column";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleDot, MapPin, Plus } from "lucide-react";
export default function Cart() {
  return (
    <>
      <div className="flex items-center justify-between pt-[10px] pb-[15px] mb-[16px] min-h-[57px] mt-5 border-b-[1px] border-solid border-inputBorder">
        <h1 className="text-2xl">Shopping Checkout</h1>
      </div>
      <div className="w-full">
        <div className="bg-widget mb-6 rounded-md drop-shadow-main">
          <div className="flex flex-col px-[10px] py-[8px] lg:px-[30px] lg:pt-[28px] lg:pb-[24px]">
            <div className="flex  items-center gap-2">
              <MapPin size={18} />
              <h3 className="text-xs text-normal xl:text-base xl:font-bold ">
                Địa Chỉ Nhận Hàng
              </h3>
            </div>
            <div className="flex xl:flex-row flex-col items-start gap-3 mt-3">
              <span className="font-normal text-md xl:font-bold">
                nguyen tien dat (+84) 862172319
              </span>
              <span>sssdddd,</span>
              <div className="flex items-center gap-2">
                <span className="font-normal text-md ">
                  Xã Vũ Xá, Huyện Kim Động, Hưng Yên
                </span>
                <Button
                  className="hidden md:flex  max-h-[16px] bg-transparent rounded-none border-red px-[5px] py-[2px] text-xs text-red"
                  variant="outline"
                >
                  Mặc Định
                </Button>
              </div>
              <Dialog>
                <DialogTrigger>
                  <p className="text-accent font-bold text-sm cursor-pointer">
                    Thay Đổi
                  </p>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <div className="opacity-0 sm:opacity-100 pb-3 border-b-min border-accent border-solid">
                        Địa Chỉ Của Tôi
                      </div>
                    </DialogTitle>
                    <DialogDescription>
                      <span className="mt-3 flex items-start gap-2">
                        <CircleDot
                          className="mt-1"
                          size={18}
                          color="rgb(255, 82, 111)"
                        />
                        <span className="flex items-start flex-col gap-1">
                          <span className="flex gap-2">
                            <span className="text-base font-normal">
                              nguyen tien dat
                            </span>
                            <span className="text-white opacity-50">|</span>
                            <span className="text-white opacity-50">
                              (+84) 862172319
                            </span>
                          </span>
                          <span className="text-sm text-normal text-white opacity-50">
                            sssdddd
                          </span>
                          <span className="text-sm text-normal text-white opacity-50">
                            Xã Vũ Xá, Huyện Kim Động, Hưng Yên
                          </span>
                          <Button
                            className="max-h-[24px] max-w-[66px] bg-transparent rounded-none border-red px-[4px] py-[2px] text-xs text-red"
                            variant="outline"
                          >
                            Mặc Định
                          </Button>
                        </span>
                        <span className="ml-auto text-accent font-bold text-sm cursor-pointer">
                          Cập nhật
                        </span>
                      </span>
                      <Button
                        variant="outline"
                        className="mt-4 rounded-none border-red"
                      >
                        <Plus size={18} color="rgb(255, 82, 111)" />
                        <p className="text-base font-normal text-red">
                          Thêm Địa Chỉ Mới
                        </p>
                      </Button>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
        <DataTable columns={columns} />
        <div className="mt-4 bg-widget w-full sm:w-[40%] rounded-md  drop-shadow-main">
          <div className="flex p-4 w-full max-w-sm items-center gap-1.5">
            <Label className="font-bold text-gray text-xs" htmlFor="message">
              Lời nhắn:
            </Label>
            <Input
              className="focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
              type="message"
              id="message"
              placeholder="Lưu ý cho Người bán..."
            />
          </div>
        </div>
        <div className="flex justify-end items-center gap-3 my-5">
          <h1 className="text-sm sm:text-base">Total : 10.490.000 ₫</h1>
          <Button className="text-white dark:text-[#00193B] w-[210px] bg-red border-min border-solid border-red text-sm font-semibold hover:bg-red">
            Đặt hàng
          </Button>
        </div>
      </div>
    </>
  );
}
