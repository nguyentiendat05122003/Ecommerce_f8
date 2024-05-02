import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin } from "lucide-react";
export default function Cart() {
  return (
    <div className="px-4">
      <Header />
      <div className="flex items-center justify-between pt-[10px] pb-[15px] mb-[16px] min-h-[57px] mt-5 border-b-[1px] border-solid border-inputBorder">
        <h1 className="text-2xl">Shopping Checkout</h1>
      </div>
      <div className="w-full">
        <div className="bg-widget rounded-md  drop-shadow-main">
          <div className="flex flex-col px-[30px] pt-[28px] pb-[24px]">
            <div className="flex  items-center gap-2">
              <MapPin size={18} />
              <h1 className="text-base font-bold ">Địa Chỉ Nhận Hàng</h1>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <p className="font-bold">nguyen tien dat (+84) 862172319</p>
              <p>sssdddd, </p>
              <div className="flex items-center gap-2">
                <p>Xã Vũ Xá, Huyện Kim Động, Hưng Yên</p>
                <Button
                  className="max-h-[16px] bg-transparent rounded-none border-red px-[5px] py-[2px] text-xs text-red"
                  variant="outline"
                >
                  Mặc Định
                </Button>
              </div>
              <p className="text-accent font-bold text-sm cursor-pointer">
                Thay Đổi
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-widget w-[40%] rounded-md  drop-shadow-main">
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
          <h1 className="text-xl">Total : 10.490.000 ₫</h1>
          <Button className="text-white dark:text-[#00193B] w-[210px] bg-red border-min border-solid border-red text-sm font-semibold hover:bg-red">
            Đặt hàng
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
