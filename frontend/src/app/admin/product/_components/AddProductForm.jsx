"use client";
import BrandApiRequest from "@/apiRequests/brand";
import cardApiRequest from "@/apiRequests/card";
import cpuApiRequest from "@/apiRequests/cpu";
import diskApiRequest from "@/apiRequests/disk";
import productApiRequest from "@/apiRequests/product";
import ramApiRequest from "@/apiRequests/ram";
import screenApiRequest from "@/apiRequests/screen";
import specialFeaturesApiRequest from "@/apiRequests/specialFeatures";
import typeBrandApiRequest from "@/apiRequests/typeBrand";
import TypeProductApiRequest from "@/apiRequests/typeProduct";
import DropFiles from "@/components/DropFile";
import MediaDropPlaceholder from "@/components/MediaDropPlaceholder";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";
import ScrollTop from "@/components/ScrollTop";

export default function AddProductForm({ product }) {
  const [ram, setRam] = useState([]);
  const [disk, setDisk] = useState([]);
  const [cpu, setCpu] = useState([]);
  const [brand, setBrand] = useState([]);
  const [typeProduct, setTypeProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [typeBrand, setTypeBrand] = useState([]);
  const [screen, setScreen] = useState([]);
  const [card, setCard] = useState([]);
  const [specialFeatures, setSpecialFeatures] = useState([]);
  const { toast } = useToast();
  const router = useRouter();
  useEffect(() => {
    const fetchApi = async () => {
      const ram = await ramApiRequest.getAll();
      const disk = await diskApiRequest.getAll();
      const cpu = await cpuApiRequest.getAll();
      const brand = await BrandApiRequest.getAllBrands();
      const typeProduct = await TypeProductApiRequest.getAllTypeProduct();
      const screen = await screenApiRequest.getAll();
      const card = await cardApiRequest.getAll();
      const specialFeatures = await specialFeaturesApiRequest.getAll();
      if (product) {
        const { data } = await typeBrandApiRequest.getTypeBrands(
          product?.brand._id
        );
        setTypeBrand(data);
      }
      setRam(ram.data);
      setDisk(disk.data);
      setCpu(cpu.data);
      setBrand(brand.data);
      setTypeProduct(typeProduct.data);
      setScreen(screen.data);
      setCard(card.data);
      setSpecialFeatures(specialFeatures.data);
    };
    fetchApi();
  }, [product]);
  const defaultValues = {
    detailImages: product?.detailImages || [],
    name: product?.name || "",
    desc: product?.desc || "",
    brand: product?.brand._id || "",
    typeProduct: product?.typeProduct._id || "",
    cpu: product?.cpu._id || "",
    disk: product?.disk._id || "",
    ram: product?.ram._id || "",
    screen: product?.screen._id || "",
    typeBrand: product?.typeBrand._id || "",
    specialFeatures: product?.specialFeatures._id || "",
    keyboard_backlight: product?.detailProduct.keyboard_backlight || "",
    size: product?.detailProduct.size || "",
    material: product?.detailProduct.material || "",
    battery: product?.detailProduct.battery || "",
    chargeCapacity: product?.detailProduct.chargeCapacity || "",
    os: product?.detailProduct.os || "",
    launchTime: product?.detailProduct.launchTime || "",
    card: product?.card._id || "",
    price: product?.price || "",
  };
  const form = useForm({
    defaultValues: defaultValues,
  });

  async function onSubmit(values) {
    if (product) {
      await updateProduct(values);
    } else {
      await createProduct(values);
    }
  }
  const updateProduct = async (values) => {
    // setIsLoading(true);
    console.log(values);
    const {
      detailImages,
      thumbs,
      desc,
      name,
      brand,
      typeProduct,
      cpu,
      disk,
      ram,
      typeBrand,
      specialFeatures,
      screen,
      keyboard_backlight,
      size,
      material,
      battery,
      chargeCapacity,
      os,
      launchTime,
      card,
      price,
    } = values;
    try {
      const formData = new FormData();
      if (thumbs) {
        for (const file of thumbs) {
          formData.append("thumbs", file);
        }
      }
      if (detailImages) {
        for (const file of detailImages) {
          formData.append("detailImages", file);
        }
      }
      formData.append("name", name);
      formData.append("desc", desc);
      formData.append("price", price);
      formData.append("brand", brand);
      formData.append("typeProduct", typeProduct);
      formData.append("cpu", cpu);
      formData.append("disk", disk);
      formData.append("ram", ram);
      formData.append("typeBrand", typeBrand);
      formData.append("specialFeatures", specialFeatures);
      formData.append("screen", screen);
      formData.append("keyboard_backlight", keyboard_backlight);
      formData.append("size", size);
      formData.append("material", material);
      formData.append("battery", battery);
      formData.append("chargeCapacity", chargeCapacity);
      formData.append("os", os);
      formData.append("launchTime", launchTime);
      formData.append("card", card);
      const result = await productApiRequest.updateProduct(
        formData,
        product?._id
      );
      console.log(result);
      toast({
        title: "Thông báo",
        description: "Sửa sản phẩm thành công",
        variant: "success",
        duration: 500,
      });
      router.push("/admin/product");
    } catch (error) {
      toast({
        title: "Thông báo",
        description: "Thêm sản phẩm thất bại",
        variant: "error",
        duration: 2000,
      });
    } finally {
      setIsLoading(false);
    }
  };
  const createProduct = async (values) => {
    setIsLoading(true);
    const {
      detailImages,
      thumbs,
      desc,
      name,
      brand,
      typeProduct,
      cpu,
      disk,
      ram,
      typeBrand,
      specialFeatures,
      screen,
      keyboard_backlight,
      size,
      material,
      battery,
      chargeCapacity,
      os,
      launchTime,
      card,
      price,
    } = values;
    try {
      const formData = new FormData();
      for (const file of thumbs) {
        formData.append("thumbs", file);
      }
      for (const file of detailImages) {
        formData.append("detailImages", file);
      }
      formData.append("name", name);
      formData.append("desc", desc);
      formData.append("price", price);
      formData.append("brand", brand);
      formData.append("typeProduct", typeProduct);
      formData.append("cpu", cpu);
      formData.append("disk", disk);
      formData.append("ram", ram);
      formData.append("typeBrand", typeBrand);
      formData.append("specialFeatures", specialFeatures);
      formData.append("screen", screen);
      formData.append("keyboard_backlight", keyboard_backlight);
      formData.append("size", size);
      formData.append("material", material);
      formData.append("battery", battery);
      formData.append("chargeCapacity", chargeCapacity);
      formData.append("os", os);
      formData.append("launchTime", launchTime);
      formData.append("card", card);
      const result = await productApiRequest.createProduct(formData);
      toast({
        title: "Thông báo",
        description: "Thêm sản phẩm thành công",
        variant: "success",
        duration: 500,
      });
      router.push("/admin/product");
    } catch (error) {
      toast({
        title: "Thông báo",
        description: "Thêm sản phẩm thất bại",
        variant: "error",
        duration: 2000,
      });
    } finally {
      setIsLoading(false);
    }
  };
  const handleChangeBrand = async (value, field) => {
    field.onChange(value);
    const { data } = await typeBrandApiRequest.getTypeBrands(value);
    if (data) {
      setTypeBrand(data);
    } else {
      setTypeBrand([]);
    }
  };
  return (
    <div>
      {isLoading && (
        <>
          <ScrollTop />
          <Loading
            className={
              "bg-black bg-opacity-50 z-50 w-full h-full flex m-auto item-center justify-center"
            }
          />
        </>
      )}
      <Form {...form}>
        <form
          encType="multipart/form-data"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="flex items-start gap-4 flex-wrap">
            <div className="flex flex-col gap-5 min-w-[600px]">
              <div>
                <span className="text-xs text-gray font-bold">
                  Ảnh chi tiết sản phẩm
                </span>
                <div className="flex item-center justify-start gap-5">
                  <Controller
                    name="detailImages"
                    control={form.control}
                    render={({ field }) => (
                      <DropFiles
                        onChange={(files) => field.onChange(files)}
                        multiple={true}
                        defaultImages={product?.detailImages}
                        wrapperClass="bg-background rounded-md flex items-center w-[150px] h-[145px] justify-center border-min border-dashed border-inputBorder 2xl:col-span-2"
                      >
                        <MediaDropPlaceholder />
                      </DropFiles>
                    )}
                  />
                </div>
              </div>
              <div className="block">
                <span className="text-xs text-gray font-bold">
                  Ảnh đại diện sản phẩm
                </span>
                <div className="w-full">
                  <Controller
                    name="thumbs"
                    control={form.control}
                    render={({ field }) => (
                      <DropFiles
                        onChange={(files) => field.onChange(files)}
                        defaultImages={product?.thumbs}
                        multiple={true}
                        wrapperClass="bg-background rounded-md flex items-center w-[150px] h-[145px] justify-center border-min border-dashed border-inputBorder 2xl:col-span-2"
                      >
                        <MediaDropPlaceholder />
                      </DropFiles>
                    )}
                  />
                </div>
              </div>
              <div className="block">
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="desc"
                    render={({ field }) => (
                      <FormItem>
                        <span className="font-bold text-gray text-xs">
                          Mô tả sản phẩm
                        </span>
                        <FormControl>
                          <Textarea
                            className="mt-0 focus:border-accent h-[200px] px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                            placeholder="Nhập mô tả sản phẩm"
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
            <div className="flex-1">
              <div className="flex flex-col gap-[10px]">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <span className="font-bold text-gray text-xs">
                        Tên sản phẩm
                      </span>
                      <FormControl>
                        <Input
                          className="mt-0 focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                          placeholder="Nhập tên sản phẩm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="mt-1 text-xs text-red" />
                    </FormItem>
                  )}
                />
                <div className="flex items-start gap-2">
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <span className="font-bold text-gray text-xs">
                          Giá sản phẩm
                        </span>
                        <FormControl>
                          <Input
                            className="flex-1 mt-0 focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                            placeholder="Nhập giá sản phẩm"
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
                              Loại sản phẩm
                            </span>
                          </Label>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            name="typeProduct"
                          >
                            <FormControl>
                              <SelectTrigger className="h-[43px]  mt-2 text-xs">
                                <SelectValue placeholder="Chọn loại sản phẩm" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {typeProduct.map((item, idx) => {
                                return (
                                  <SelectItem key={idx} value={item._id}>
                                    {item.name}
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
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="brand"
                      render={({ field }) => (
                        <FormItem>
                          <Label>
                            <span className="font-bold text-gray text-xs">
                              Thương hiệu
                            </span>
                          </Label>
                          <Select
                            onValueChange={(value) => {
                              handleChangeBrand(value, field);
                            }}
                            name="brand"
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="h-[43px]  mt-2 text-xs">
                                <SelectValue placeholder="Chọn thương hiệu" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {brand.map((item, idx) => {
                                return (
                                  <SelectItem key={idx} value={item._id}>
                                    {item.name}
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
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="typeBrand"
                      render={({ field }) => (
                        <FormItem>
                          <Label>
                            <span className="font-bold text-gray text-xs">
                              Loại thương hiệu
                            </span>
                          </Label>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            name="typeBrand"
                          >
                            <FormControl>
                              <SelectTrigger className="h-[43px]  mt-2 text-xs">
                                <SelectValue placeholder="Chọn loại thương hiệu" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {typeBrand.map((item, idx) => {
                                return (
                                  <SelectItem key={idx} value={item._id}>
                                    {item.name}
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
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="cpu"
                      render={({ field }) => (
                        <FormItem>
                          <Label>
                            <span className="font-bold text-gray text-xs">
                              Bộ xử lý
                            </span>
                          </Label>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            name="cpu"
                          >
                            <FormControl>
                              <SelectTrigger className="h-[43px]  mt-2 text-xs">
                                <SelectValue placeholder="Chọn bộ xử lý" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {cpu.map((item, idx) => {
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
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="disk"
                      render={({ field }) => (
                        <FormItem>
                          <Label>
                            <span className="font-bold text-gray text-xs">
                              Ổ cứng
                            </span>
                          </Label>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            name="disk"
                          >
                            <FormControl>
                              <SelectTrigger className="h-[43px]  mt-2 text-xs">
                                <SelectValue placeholder="Chọn ổ cứng" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {disk.map((item, idx) => {
                                return (
                                  <SelectItem key={idx} value={item._id}>
                                    {item.value}
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
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="ram"
                      render={({ field }) => (
                        <FormItem>
                          <Label>
                            <span className="font-bold text-gray text-xs">
                              Bộ nhớ tạm
                            </span>
                          </Label>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            name="ram"
                          >
                            <FormControl>
                              <SelectTrigger className="h-[43px]  mt-2 text-xs">
                                <SelectValue placeholder="Chọn bộ nhớ tạm" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {ram.map((item, idx) => {
                                return (
                                  <SelectItem key={idx} value={item._id}>
                                    {item.value} {item.typeRam.value}{" "}
                                    {item.typeRam.desc}
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
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="screen"
                      render={({ field }) => (
                        <FormItem>
                          <Label>
                            <span className="font-bold text-gray text-xs">
                              Màn hình
                            </span>
                          </Label>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            name="screen"
                          >
                            <FormControl>
                              <SelectTrigger className="h-[43px]  mt-2 text-xs">
                                <SelectValue placeholder="Chọn màn hình" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {screen.map((item, idx) => {
                                return (
                                  <SelectItem key={idx} value={item._id}>
                                    {item.screenSize.size}{" "}
                                    {item.screenResolution.value}{" "}
                                    {item.screenRefreshRate.value}
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
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="card"
                      render={({ field }) => (
                        <FormItem>
                          <Label>
                            <span className="font-bold text-gray text-xs">
                              Card đồ họa
                            </span>
                          </Label>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            name="card"
                          >
                            <FormControl>
                              <SelectTrigger className="h-[43px]  mt-2 text-xs">
                                <SelectValue placeholder="Chọn card đồ họa" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {card.map((item, idx) => {
                                return (
                                  <SelectItem key={idx} value={item._id}>
                                    {item.value}
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
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="specialFeatures"
                      render={({ field }) => (
                        <FormItem>
                          <Label>
                            <span className="font-bold text-gray text-xs">
                              Tính năng đặc biệt
                            </span>
                          </Label>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            name="specialFeatures"
                          >
                            <FormControl>
                              <SelectTrigger className="h-[43px]  mt-2 text-xs">
                                <SelectValue placeholder="Chọn tính năng đặc biệt" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {specialFeatures.map((item, idx) => {
                                return (
                                  <SelectItem key={idx} value={item._id}>
                                    {item.value}
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
                    name="size"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <span className="font-bold text-gray text-xs">
                          Kích thước sản phẩm
                        </span>
                        <FormControl>
                          <Input
                            className="flex-1 mt-0 focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                            placeholder="Nhập kích thước sản phẩm"
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
                      name="keyboard_backlight"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <span className="font-bold text-gray text-xs">
                            Đèn bàn phím
                          </span>
                          <FormControl>
                            <Input
                              className="flex-1 mt-0 focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                              placeholder="Nhập loại đèn bàn phím"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="mt-1 text-xs text-red" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <FormField
                    control={form.control}
                    name="material"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <span className="font-bold text-gray text-xs">
                          Vật liệu
                        </span>
                        <FormControl>
                          <Input
                            className="flex-1 mt-0 focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                            placeholder="Nhập vật liệu"
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
                      name="battery"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <span className="font-bold text-gray text-xs">
                            Pin
                          </span>
                          <FormControl>
                            <Input
                              className="flex-1 mt-0 focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                              placeholder="Nhập loại pin"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="mt-1 text-xs text-red" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <FormField
                    control={form.control}
                    name="chargeCapacity"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <span className="font-bold text-gray text-xs">
                          Công suất pin
                        </span>
                        <FormControl>
                          <Input
                            className="flex-1 mt-0 focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                            placeholder="Nhập công suất pin"
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
                      name="os"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <span className="font-bold text-gray text-xs">
                            Hệ điều hành
                          </span>
                          <FormControl>
                            <Input
                              className="flex-1 mt-0 focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                              placeholder="Nhập hệ điều hành"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="mt-1 text-xs text-red" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <FormField
                    control={form.control}
                    name="launchTime"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <span className="font-bold text-gray text-xs">
                          Thời gian ra mắt
                        </span>
                        <FormControl>
                          <Input
                            className="flex-1 mt-0 focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                            placeholder="Nhập thời gian ra mắt"
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
              {product ? "Sửa sản phẩm" : "Thêm sản phẩm"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
