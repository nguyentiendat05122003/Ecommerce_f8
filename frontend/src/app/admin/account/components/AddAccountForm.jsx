"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import authApiRequest from "@/apiRequests/auth";
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
import { useToast } from "@/components/ui/use-toast";
import { handleErrorApi } from "@/lib/utils";
import { LoginBody } from "@/schemaValidations/auth.schema";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AccountBody } from "@/schemaValidations/accountForm.schema";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function AddAccountForm() {
  const form = useForm({
    resolver: zodResolver(AccountBody),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
    },
  });
  const router = useRouter();
  const { toast } = useToast();

  const onSubmit = async (values) => {
    try {
      const result = await authApiRequest.register(values);
      toast({
        title: "Thông báo",
        description: "Thêm tài khoản thành công",
        variant: "success",
        duration: 500,
      });
      router.push("/admin/account");
    } catch (error) {
      toast({
        title: "Thông báo",
        description: "Thêm tài khoản thất bại",
        variant: "error",
        duration: 2000,
      });
    }
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 w-full ">
          <div className="flex flex-col gap-5 items-center">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-gray text-xs">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                        type="email"
                        placeholder="Email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="mt-1 text-xs text-red" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-gray text-xs">
                      Mật khẩu
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="mt-1 text-xs text-red" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-gray text-xs">
                      Nhập lại mật khẩu
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                        type="password"
                        placeholder="ConfirmPassword"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="mt-1 text-xs text-red" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <Label>
                      <span className="font-bold text-gray text-xs">Quyền</span>
                    </Label>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      name="role"
                    >
                      <FormControl>
                        <SelectTrigger className="h-[43px]  mt-2 text-xs">
                          <SelectValue placeholder="Chọn quyền" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="mt-1 text-xs text-red" />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 mt-4 mb-10 ">
            <Button className="hover:bg-[#02A189] w-full bg-[#00BA9D] border-min border-solid border-[#01C8A9] rounded-[23px] max-w-sm text-base font-semibold">
              Thêm tài khoản
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
