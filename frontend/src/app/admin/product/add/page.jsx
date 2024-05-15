"use client";
import DropFiles from "@/components/DropFile";
import MediaDropPlaceholder from "@/components/MediaDropPlaceholder";
import PageHeader from "@/components/PageHeader";
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
import { Controller, useForm } from "react-hook-form";
export default function AddProduct() {
  const defaultValues = {
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    dimensions: "10 * 10 * 10",
    weight: 0.1,
    productName: "Sport Smart Watch",
    brandName: "Pineapple",
    regularPrice: 1000,
    salePrice: 800,
    productSKU: "SKU-123456",
    qty: 100,
  };
  const form = useForm({
    defaultValues: defaultValues,
  });
  return (
    <div>
      <PageHeader title="Add Product" />
      <div className="bg-widget rounded-md  drop-shadow-main p-[26px]">
        <h5 className="mb-[15px] text-header text-xl font-bold">
          Product Settings
        </h5>
        <Form {...form}>
          <div className="flex items-start gap-4">
            <div>
              <span className="text-xs text-gray font-bold">
                Product Images Detail
              </span>
              <div className="flex item-center justify-start gap-5">
                <Controller
                  name="image1"
                  control={form.control}
                  defaultValue=""
                  render={({ field }) => (
                    <DropFiles
                      onChange={(files) => field.onChange(files)}
                      wrapperClass="bg-background rounded-md flex items-center w-[150px] h-[145px] justify-center border-min border-dashed border-inputBorder 2xl:col-span-2"
                    >
                      <MediaDropPlaceholder />
                    </DropFiles>
                  )}
                />
                <Controller
                  name="image2"
                  control={form.control}
                  defaultValue=""
                  render={({ field }) => (
                    <DropFiles
                      onChange={(files) => field.onChange(files)}
                      wrapperClass="bg-background rounded-md flex items-center w-[150px] h-[145px] justify-center border-min border-dashed border-inputBorder 2xl:col-span-2"
                    >
                      <MediaDropPlaceholder />
                    </DropFiles>
                  )}
                />
                <Controller
                  name="image3"
                  control={form.control}
                  defaultValue=""
                  render={({ field }) => (
                    <DropFiles
                      onChange={(files) => field.onChange(files)}
                      wrapperClass="bg-background rounded-md flex items-center w-[150px] h-[145px] justify-center border-min border-dashed border-inputBorder 2xl:col-span-2"
                    >
                      <MediaDropPlaceholder />
                    </DropFiles>
                  )}
                />
                <Controller
                  name="image1"
                  control={form.control}
                  defaultValue=""
                  render={({ field }) => (
                    <DropFiles
                      onChange={(files) => field.onChange(files)}
                      wrapperClass="bg-background rounded-md flex items-center w-[150px] h-[145px] justify-center border-min border-dashed border-inputBorder 2xl:col-span-2"
                    >
                      <MediaDropPlaceholder />
                    </DropFiles>
                  )}
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-[10px]">
                <FormField
                  control={form.control}
                  name="productName"
                  render={({ field }) => (
                    <FormItem>
                      <span className="font-bold text-gray text-xs">
                        Product Name
                      </span>
                      <FormControl>
                        <Input
                          className="mt-0 focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                          placeholder="Enter product name"
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
                    name="brandName"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <span className="font-bold text-gray text-xs">
                          Brand Name
                        </span>
                        <FormControl>
                          <Input
                            className="flex-1 mt-0 focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                            placeholder="Enter product name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="mt-1 text-xs text-red" />
                      </FormItem>
                    )}
                  />
                  <div className="flex-1">
                    <Label>
                      <span className="font-bold text-gray text-xs">
                        Category
                      </span>
                    </Label>
                    <Select>
                      <SelectTrigger className="h-[43px]  mt-2 text-xs">
                        <SelectValue
                          className="text-[10px]"
                          placeholder="Brand"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
