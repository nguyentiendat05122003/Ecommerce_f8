"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CircleDot, MapPin, Plus } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Address from "@/app/checkout/_components/Address";
import { AddressBody } from "@/schemaValidations/address.schema";
import deliveryAddressApiRequest from "@/apiRequests/deliveryAddress";
import { formatAddress, formatPrice } from "@/lib/utils";
import { useSelector } from "react-redux";
import { DataTable } from "@/components/DataTable";
import { columns } from "@/app/checkout/column";
export default function Cart() {
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [ward, setWard] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [addressCurrent, setAddressCurrent] = useState();
  const [listAddress, setListAddress] = useState([]);
  const [desc, setDesc] = useState("");
  const [valuesPosition, setValuesPosition] = useState({
    province: {},
    district: {},
    ward: {},
  });
  const { listProductCheckout } = useSelector((state) => state.productCheckout);
  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    const fetchApi = async () => {
      fetch("https://vapi.vnappmob.com/api/province")
        .then((response) => response.json())
        .then((json) => setProvince(json.results));
      const responseAddress =
        await deliveryAddressApiRequest.getDeliveryAddress(userId);
      setListAddress(responseAddress);
    };
    fetchApi();
  }, []);
  useEffect(() => {
    setAddressCurrent(() => {
      return listAddress.find((item) => item.isDefault === true);
    });
  }, [listAddress]);
  const handleChooseProvince = (provinceId, provinceName, isEdit) => {
    if (!isEdit) {
      setSelectedProvince(provinceId);
      setSelectedDistrict(null);
      setValuesPosition((prev) => {
        return { ...prev, province: { provinceId, provinceName } };
      });
    }
    try {
      fetch(`https://vapi.vnappmob.com/api/province/district/${provinceId}`)
        .then((response) => response.json())
        .then((json) => setDistrict(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChooseDistrict = (districtId, districtName, isEdit) => {
    if (!isEdit) {
      setSelectedDistrict(districtId);
      setValuesPosition((prev) => {
        return { ...prev, district: { districtId, districtName } };
      });
    }
    try {
      fetch(`https://vapi.vnappmob.com/api/province/ward/${districtId}`)
        .then((response) => response.json())
        .then((json) => {
          return setWard(json.results);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChooseWard = (wardId, wardName, isEdit) => {
    if (!isEdit) {
      setValuesPosition((prev) => {
        return { ...prev, ward: { wardId, wardName } };
      });
    }
  };
  const form = useForm({
    resolver: zodResolver(AddressBody),
    defaultValues: {
      name: "",
      phone: "",
      location: "",
      isDefault: false,
    },
  });
  const handleChooseAddress = (id) => {
    setListAddress((prev) => {
      const newListAddress = prev.map((item) => {
        if (item._id === id) {
          return { ...item, isDefault: true };
        } else {
          return { ...item, isDefault: false };
        }
      });
      return newListAddress;
    });
  };
  const handleUpdateAddress = (id, values) => {
    setListAddress((prev) => {
      const newListAddress = prev.map((item) => {
        if (item._id === id) {
          return values;
        } else {
          return item;
        }
      });
      return newListAddress;
    });
  };
  const onSubmit = async (values) => {
    values.address = valuesPosition;
    values.user = JSON.parse(localStorage.getItem("user"))._id;
    const result = await deliveryAddressApiRequest.createDeliveryAddress(
      values
    );
    setListAddress((prev) => {
      return [...prev, result.data];
    });
  };
  const handleCheckout = async () => {
    console.log({ detail_payment: listProductCheckout });
  };
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
                {addressCurrent?.name} ({addressCurrent?.phone})
              </span>
              <span>{addressCurrent?.location},</span>
              <div className="flex items-center gap-2">
                <span className="font-normal text-md ">
                  {formatAddress(addressCurrent?.address)}
                </span>
                <Button
                  className="hidden md:flex hover:bg-transparent  max-h-[16px] bg-transparent rounded-none border-red px-[5px] py-[2px] text-xs text-red"
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
                <DialogContent className="min-h-[544px]">
                  <DialogHeader>
                    <DialogTitle>
                      <div className="opacity-0 sm:opacity-100 pb-3 border-b-min border-accent border-solid">
                        Địa Chỉ Của Tôi
                      </div>
                    </DialogTitle>
                    <DialogDescription>
                      <span className="flex flex-col gap-2">
                        {listAddress.map((item, idx) => {
                          return (
                            <Address
                              onClick={handleChooseAddress}
                              onUpdate={handleUpdateAddress}
                              item={item}
                              key={idx}
                            />
                          );
                        })}
                      </span>
                      <Dialog className="sm:max-w-[425px] w-[512px]">
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="flex mt-4 rounded-none border-red hover:bg-transparent"
                          >
                            <Plus size={18} color="rgb(255, 82, 111)" />
                            <span className="text-base font-normal text-red">
                              Thêm Địa Chỉ Mới
                            </span>
                          </Button>
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
                                              value={`${
                                                valuesPosition.province
                                                  .provinceName ||
                                                "Tỉnh/ Thành phố, Quận/Huyện, Phường/Xã"
                                              } ${
                                                valuesPosition.district
                                                  .districtName || ""
                                              } ${
                                                valuesPosition.ward.wardName ||
                                                ""
                                              }`}
                                              onChange={(e) =>
                                                e.preventDefault()
                                              }
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
                                                  <TabsTrigger
                                                    value="district"
                                                    className={`${
                                                      !selectedProvince
                                                        ? "bg-gray-200 cursor-not-allowed"
                                                        : "bg-transparent"
                                                    }`}
                                                    disabled={!selectedProvince}
                                                  >
                                                    Quận/Huyện
                                                  </TabsTrigger>
                                                  <TabsTrigger
                                                    value="ward"
                                                    className={`${
                                                      !selectedDistrict
                                                        ? "bg-gray-200 cursor-not-allowed"
                                                        : "bg-transparent"
                                                    }`}
                                                    disabled={!selectedDistrict}
                                                  >
                                                    Phường/ Xã
                                                  </TabsTrigger>
                                                </TabsList>
                                              </div>
                                              <div className="mt-10 max-h-[300px] pb-4 overflow-y-auto scroll-smooth">
                                                <TabsContent value="province">
                                                  <ul className="flex flex-col">
                                                    {province.map(
                                                      (item, idx) => (
                                                        <li
                                                          onClick={() =>
                                                            handleChooseProvince(
                                                              item.province_id,
                                                              item.province_name
                                                            )
                                                          }
                                                          key={idx}
                                                          className={`px-2 py-2 cursor-pointer ${
                                                            valuesPosition
                                                              .province
                                                              .provinceId ===
                                                            item.province_id
                                                              ? "text-red"
                                                              : ""
                                                          }`}
                                                        >
                                                          {item.province_name}
                                                        </li>
                                                      )
                                                    )}
                                                  </ul>
                                                </TabsContent>
                                                <TabsContent value="district">
                                                  {selectedProvince ? (
                                                    <ul className="flex flex-col">
                                                      {district.map(
                                                        (item, idx) => (
                                                          <li
                                                            onClick={() =>
                                                              handleChooseDistrict(
                                                                item.district_id,
                                                                item.district_name
                                                              )
                                                            }
                                                            key={idx}
                                                            className={`px-2 py-2 cursor-pointer ${
                                                              valuesPosition
                                                                .district
                                                                .districtId ===
                                                              item.district_id
                                                                ? "text-red"
                                                                : ""
                                                            }`}
                                                          >
                                                            {item.district_name}
                                                          </li>
                                                        )
                                                      )}
                                                    </ul>
                                                  ) : (
                                                    <p className="px-2 py-2">
                                                      Please select a province
                                                      first
                                                    </p>
                                                  )}
                                                </TabsContent>
                                                <TabsContent value="ward">
                                                  {selectedDistrict ? (
                                                    <ul className="flex flex-col">
                                                      {ward.map((item, idx) => (
                                                        <li
                                                          onClick={() =>
                                                            handleChooseWard(
                                                              item.ward_id,
                                                              item.ward_name
                                                            )
                                                          }
                                                          key={idx}
                                                          className={`px-2 py-2 cursor-pointer ${
                                                            valuesPosition.ward
                                                              .wardId ===
                                                            item.ward_id
                                                              ? "text-red"
                                                              : ""
                                                          }`}
                                                        >
                                                          {item.ward_name}
                                                        </li>
                                                      ))}
                                                    </ul>
                                                  ) : (
                                                    <p className="px-2 py-2">
                                                      Please select a district
                                                      first
                                                    </p>
                                                  )}
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
                                  name="isDefault"
                                  render={({ field }) => (
                                    <FormItem>
                                      <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                      />
                                      <FormControl></FormControl>
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
                                <DialogClose type="submit">
                                  <div className="mt-4 w-[100px] h-[40px] rounded-none hover:bg-accent border-min border-solid bg-accent text-white flex items-center justify-center">
                                    Hoàn thành
                                  </div>
                                </DialogClose>
                              </DialogFooter>
                            </form>
                          </Form>
                        </DialogContent>
                      </Dialog>
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="mt-auto flex items-center">
                    <DialogClose>
                      <span className="mt-4 rounded-none border-red hover:bg-transparent">
                        <p className="min-w-[100px] text-base font-normal text-red px-4 py-2 border-min rounded-none border-red">
                          Hủy
                        </p>
                      </span>
                    </DialogClose>
                    <DialogClose>
                      <div className="h-[40px] w-[100px] rounded-none hover:bg-accent bg-accent text-white flex items-center justify-center">
                        <p className="text-base font-normal">Xác nhận</p>
                      </div>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
        <DataTable
          onSelect={() => {}}
          data={listProductCheckout}
          columns={columns}
        />
        <div className="mt-4 bg-widget w-full sm:w-[40%] rounded-md  drop-shadow-main">
          <div className="flex p-4 w-full max-w-sm items-center gap-1.5">
            <Label className="font-bold text-gray text-xs" htmlFor="message">
              Lời nhắn:
            </Label>
            <Input
              className="focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Lưu ý cho Người bán..."
            />
          </div>
        </div>
        <div className="flex justify-end items-center gap-3 my-5">
          <h1 className="text-sm sm:text-base">
            Total :{" "}
            {formatPrice(
              listProductCheckout?.reduce((total, item) => {
                return total + item.productId.price * item.quantity;
              }, 0)
            )}
          </h1>
          <Button
            onClick={handleCheckout}
            className="text-white dark:text-[#00193B] w-[210px] bg-red border-min border-solid border-red text-sm font-semibold hover:bg-red"
          >
            Đặt hàng
          </Button>
        </div>
      </div>
    </>
  );
}
