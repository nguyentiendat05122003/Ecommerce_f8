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
export default function FormAddCpu() {
  const form = useForm();
  return (
    <div className="bg-widget p-[26px] w-full">
      <h5 className="text-base text-header">Thông tin bộ xử lý</h5>
      <Form {...form}>
        <form className="mt-4">
          <div className="flex items-start gap-4 flex-wrap">
            <div className="flex-1 flex flex-wrap gap-4">
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <span className="font-bold text-gray text-xs">
                        Giá trị bộ xử lý
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
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="cores"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <span className="font-bold text-gray text-xs">
                        Số nhân
                      </span>
                      <FormControl>
                        <Input
                          className="flex-1 mt-0 focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                          placeholder="Nhập số nhân"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="mt-1 text-xs text-red" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="threads"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <span className="font-bold text-gray text-xs">
                        Số luồng
                      </span>
                      <FormControl>
                        <Input
                          className="flex-1 mt-0 focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                          placeholder="Nhập số luồng"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="mt-1 text-xs text-red" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="speed"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <span className="font-bold text-gray text-xs">
                        Tốc độ bộ xử lý
                      </span>
                      <FormControl>
                        <Input
                          className="flex-1 mt-0 focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                          placeholder="Nhập tốc độ bộ xử lý"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="mt-1 text-xs text-red" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="cache"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <span className="font-bold text-gray text-xs">
                        Bộ nhớ đệm
                      </span>
                      <FormControl>
                        <Input
                          className="flex-1 mt-0 focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                          placeholder="Nhập bộ nhớ đệm"
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
          <div className="mt-3">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <span className="font-bold text-gray text-xs">Mô tả</span>
                  <FormControl>
                    <Input
                      className="flex-1 mt-0 focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                      placeholder="Nhập mô tả"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="mt-1 text-xs text-red" />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-3 flex justify-end">
            <Button className="text-white px-[26px] text-base hover:bg-[#02A189] bg-[#00BA9D] border-min border-solid border-[#01C8A9] font-bold rounded-[23px]">
              Thêm bộ xử lý
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
