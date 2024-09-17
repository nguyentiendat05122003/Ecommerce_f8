"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
export default function FormAddProvider() {
  const form = useForm();
  return (
    <div className="bg-widget p-[26px] w-full">
      <h5 className="text-base text-header">Thông tin nhà cung cấp</h5>
      <Form {...form}>
        <form className="mt-4">
          <div className="flex items-start gap-4 flex-wrap">
            <div className="flex-1">
              <div className="flex flex-col gap-[10px]">
                <div className="flex items-start gap-2">
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <span className="font-bold text-gray text-xs">
                          Tên nhà cung cấp
                        </span>
                        <FormControl>
                          <Input
                            className="flex-1 mt-0 focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                            placeholder="Nhập giá trị bộ đệm"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="mt-1 text-xs text-red" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <span className="font-bold text-gray text-xs">
                          Số điện thoại
                        </span>
                        <FormControl>
                          <Input
                            className="flex-1 mt-0 focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                            placeholder="Nhập giá trị bộ đệm"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="mt-1 text-xs text-red" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <span className="font-bold text-gray text-xs">
                          Địa chỉ
                        </span>
                        <FormControl>
                          <Input
                            className="flex-1 mt-0 focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                            placeholder="Nhập giá trị bộ đệm"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="mt-1 text-xs text-red" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <span className="font-bold text-gray text-xs">
                          Mô tả
                        </span>
                        <FormControl>
                          <Input
                            className="flex-1 mt-0 focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                            placeholder="Nhập giá trị bộ đệm"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="mt-1 text-xs text-red" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 flex justify-end">
            <Button className="text-white px-[26px] text-base  hover:bg-[#02A189] bg-[#00BA9D] border-min border-solid border-[#01C8A9]  font-bold rounded-[23px]">
              Thêm ổ cứng
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
