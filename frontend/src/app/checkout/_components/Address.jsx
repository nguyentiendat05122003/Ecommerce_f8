"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectTrigger } from "@/components/ui/select";
import { AddressBody } from "@/schemaValidations/address.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleDot } from "lucide-react";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { useEffect } from "react";
import { formatAddress } from "@/lib/utils";

export default function Address({
  item,
  onClick,
  province,
  district,
  ward,
  handleChooseDistrict,
  handleChooseProvince,
}) {
  const { isDefault, name, phone, address, location, _id } = item;

  const form = useForm({
    resolver: zodResolver(AddressBody),
    defaultValues: {
      name: name,
      phone: phone,
      // address: "",
      location: location,
      isDefault: isDefault,
    },
  });
  useEffect(() => {
    handleChooseProvince(
      address.province.provinceId,
      address.province.provinceName,
      true
    );
    handleChooseDistrict(
      address.district.districtId,
      address.district.districtName,
      true
    );
  }, []);
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <span className="mt-3 flex">
      <span className="flex items-start gap-2" onClick={() => onClick(_id)}>
        <CircleDot
          className="mt-1"
          size={18}
          color={`${isDefault ? "rgb(255, 82, 111)" : "rgb(255,255,255)"}`}
        />
        <span className="flex items-start flex-col gap-1">
          <span className="flex gap-2">
            <span className="text-base font-normal">{name}</span>
            <span className="text-white opacity-50">|</span>
            <span className="text-white opacity-50">{phone}</span>
          </span>
          <span className="text-sm text-normal text-white opacity-50">
            {location}
          </span>
          <span className="text-sm text-normal text-white opacity-50">
            {formatAddress(address)}
          </span>

          <button className="h-[24px]  hover:bg-transparent  max-w-[66px] bg-transparent rounded-none border-red px-[4px] py-[2px] text-xs text-red">
            {isDefault ? "Mặc Định" : ""}
          </button>
        </span>
      </span>

      <Dialog className="sm:max-w-[425px] w-[512px]">
        <DialogTrigger asChild>
          <span className="ml-auto text-accent font-bold text-sm cursor-pointer">
            Cập nhật
          </span>
        </DialogTrigger>
        <DialogContent turnOff={true} className=" h-[544px]">
          <DialogHeader>
            <DialogTitle>Địa chỉ mới</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-[15px]"
            >
              <div className="flex w-full items-center justify-between">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Họ và tên"
                          className="w-[225px] focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                        />
                      </FormControl>
                      <FormMessage className="mt-1 text-xs text-red" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-[225px] focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                          placeholder="Số điện thoại"
                        />
                      </FormControl>
                      <FormMessage className="mt-1 text-xs text-red" />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                className="text-sm font-normal"
                control={form.control}
                name="address"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-full text-xs text-header font-normal">
                            <input
                              {...field}
                              value={formatAddress(address)}
                              onChange={(e) => e.preventDefault()}
                              className="w-full h-full outline-none border-none bg-transparent text-sm font-normal"
                            />
                          </SelectTrigger>
                          <SelectContent className="max-h-[300px] overscroll-y-auto scroll-smooth">
                            <Tabs
                              defaultValue="province"
                              className="w-full relative"
                            >
                              <div className="relative">
                                <TabsList className="fixed top-0 left-0 right-0 flex items-center w-full justify-between bg-black">
                                  <TabsTrigger
                                    className="bg-transparent border-b-min border-solid border-accent"
                                    value="province"
                                  >
                                    Tỉnh/Thành phố
                                  </TabsTrigger>
                                  <TabsTrigger value="district">
                                    Quận/Huyện
                                  </TabsTrigger>
                                  <TabsTrigger value="ward">
                                    Phường/ Xã
                                  </TabsTrigger>
                                </TabsList>
                              </div>
                              <div className="mt-10 max-h-[300px] pb-4 overflow-y-auto scroll-smooth">
                                <TabsContent value="province">
                                  <ul className="flex flex-col">
                                    {province.map((item, idx) => (
                                      <li
                                        key={idx}
                                        className={`px-2 py-2 cursor-pointer ${
                                          address.province.provinceId ===
                                          item.province_id
                                            ? "text-red"
                                            : ""
                                        } `}
                                      >
                                        {item.province_name}
                                      </li>
                                    ))}
                                  </ul>
                                </TabsContent>
                                <TabsContent value="district">
                                  <ul className="flex flex-col">
                                    {district.map((item, idx) => (
                                      <li
                                        key={idx}
                                        className={`px-2 py-2 cursor-pointer ${
                                          address.district.districtId ===
                                          item.district_id
                                            ? "text-red"
                                            : ""
                                        } `}
                                      >
                                        {item.district_name}
                                      </li>
                                    ))}
                                  </ul>
                                </TabsContent>
                                <TabsContent value="ward">
                                  <ul className="flex flex-col">
                                    {ward.map((item, idx) => (
                                      <li
                                        key={idx}
                                        className={`px-2 py-2 cursor-pointer  ${
                                          address.ward.wardId === item.ward_id
                                            ? "text-red"
                                            : ""
                                        }`}
                                      >
                                        {item.ward_name}
                                      </li>
                                    ))}
                                  </ul>
                                </TabsContent>
                              </div>
                            </Tabs>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage className="mt-1 text-xs text-red" />
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        name="location"
                        placeholder="Địa chỉ cụ thể"
                        className="focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                      />
                    </FormControl>
                    <FormMessage className="mt-1 text-xs text-red" />
                  </FormItem>
                )}
              />
              <div className="flex items-center space-x-2">
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Checkbox
                          checked={isDefault}
                          {...field}
                          name="isDefault"
                          id="terms"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Đặt làm địa chỉ mặc đinh
                </label>
              </div>
              <DialogFooter className="ml-auto mt-auto flex items-center gap-2">
                <DialogClose>
                  <p className="mt-4 w-[100px] text-base font-normal text-red border-min border-solid px-4 py-2 rounded-none border-red">
                    Trở lại
                  </p>
                </DialogClose>
                <Button className="mt-4 w-[100px] rounded-none hover:bg-accent bg-accent text-white">
                  <p className="text-base font-normal">Hoàn thành</p>
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </span>
  );
}
