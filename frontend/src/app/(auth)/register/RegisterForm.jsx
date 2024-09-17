"use client";
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
import { RegisterBody } from "@/schemaValidations/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
export default function RegisterForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(RegisterBody),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = async (values) => {
    if (loading) return;
    setLoading(true);
    try {
      const result = await authApiRequest.register(values);
      toast({
        title: "Thông báo",
        description: "Đăng kí thành công",
        variant: "success",
        duration: 1000,
      });
      router.push("/login");
    } catch (error) {
      // handleErrorApi({
      //   error,
      //   setError: form.setError,
      // });
    } finally {
      setLoading(false);
    }
  };
  return (
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
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 mt-4 mb-10 ">
          <Button className="hover:bg-[#02A189] w-full bg-[#00BA9D] border-min border-solid border-[#01C8A9] rounded-[23px] max-w-sm text-base font-semibold">
            Sign Up
          </Button>
        </div>
      </form>
    </Form>
    // <form onSubmit={handleSubmit} className="mt-5 w-full ">
    //   <div className="flex flex-col gap-5 items-center">
    //     <div className="grid w-full max-w-sm items-center gap-1.5">
    //       <Label className="font-bold text-gray text-xs" htmlFor="email">
    //         Email
    //       </Label>
    //       <Input
    //         className="focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
    //         type="email"
    //         id="email"
    //         placeholder="Email"
    //         name="email"
    //         value={value.email}
    //         onChange={handleChange}
    //       />
    //       <div className="mt-1 text-xs text-red">
    //         {errors.find((error) => error.for === "email")?.message}
    //       </div>
    //     </div>
    //     <div className="grid w-full max-w-sm items-center gap-1.5">
    //       <Label className="font-bold text-gray text-xs" htmlFor="password">
    //         Password
    //       </Label>
    //       <Input
    //         className="focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
    //         type="password"
    //         id="password"
    //         name="password"
    //         placeholder="Password"
    //         value={value.password}
    //         onChange={handleChange}
    //       />
    //       <div className="mt-1 text-xs text-red">
    //         {errors.find((error) => error.for === "password")?.message}
    //       </div>
    //     </div>
    //     <div className="grid w-full max-w-sm items-center gap-1.5">
    //       <Label
    //         className="font-bold text-gray text-xs"
    //         htmlFor="confirmPassword"
    //       >
    //         Password Confirm
    //       </Label>
    //       <Input
    //         className="focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
    //         type="password"
    //         id="confirmPassword"
    //         name="confirmPassword"
    //         placeholder="Password Confirm"
    //         value={value.confirmPassword}
    //         onChange={handleChange}
    //       />
    //       <div className="mt-1 text-xs text-red">
    //         {errors.find((error) => error.for === "confirmPassword")?.message}
    //       </div>
    //     </div>
    //   </div>

    //   <div className="flex flex-col items-center gap-6 mt-4 mb-10 ">
    //     <Button className="hover:bg-[#02A189] w-full bg-[#00BA9D] border-min border-solid border-[#01C8A9] rounded-[23px] max-w-sm text-base font-semibold">
    //       Sign Up
    //     </Button>
    //   </div>
    // </form>
  );
}
