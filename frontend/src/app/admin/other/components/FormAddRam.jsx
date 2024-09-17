"use client";
import TypeRamApiRequest from "@/apiRequests/typeRam";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
export default function FormAddRam() {
  const [listTypeRam, setListTypeRam] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const { data } = await TypeRamApiRequest.getAll();
      setListTypeRam(data);
    };
    fetchApi();
  });
  const form = useForm();
  return (
    <div className="bg-widget p-[26px] w-full">
      <h5 className="text-base text-header">Thông tin bộ nhớ đệm</h5>
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
                          Giá trị bộ đệm
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
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="typeProduct"
                      render={({ field }) => (
                        <FormItem>
                          <Label>
                            <span className="font-bold text-gray text-xs">
                              Loại bộ đệm
                            </span>
                          </Label>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            name="typeProduct"
                          >
                            <FormControl>
                              <SelectTrigger className="h-[43px]  mt-2 text-xs">
                                <SelectValue placeholder="Chọn loại bộ đệm" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {listTypeRam.map((item, idx) => {
                                return (
                                  <SelectItem key={idx} value={item._id}>
                                    {item.value} {item.desc}
                                  </SelectItem>
                                );
                              })}
                            </SelectContent>
                          </Select>
                          <FormMessage className="mt-1 text-xs text-red" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <span className="font-bold text-gray text-xs">
                          Tốc độ bộ đệm
                        </span>
                        <FormControl>
                          <Input
                            className="flex-1 mt-0 focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                            placeholder="Nhập tốc độ bộ đệm"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="mt-1 text-xs text-red" />
                      </FormItem>
                    )}
                  />
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="typeProduct"
                      render={({ field }) => (
                        <FormItem>
                          <Label>
                            <span className="font-bold text-gray text-xs">
                              Hỗ trợ tối đa
                            </span>
                          </Label>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            name="typeProduct"
                          >
                            <FormControl>
                              <Input
                                className="flex-1 mt-0 focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                                placeholder="Nhập tốc độ bộ đệm"
                                {...field}
                              />
                            </FormControl>
                            <SelectContent></SelectContent>
                          </Select>

                          <FormMessage className="mt-1 text-xs text-red" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 flex justify-end">
            <Button className="text-white px-[26px] text-base  hover:bg-[#02A189] bg-[#00BA9D] border-min border-solid border-[#01C8A9]  font-bold rounded-[23px]">
              Thêm bộ xử lý
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
