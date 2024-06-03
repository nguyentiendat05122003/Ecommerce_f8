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
import { LoginBody } from "@/schemaValidations/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
export default function LoginForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();
  const onSubmit = async (values) => {
    if (loading) return;
    setLoading(true);
    try {
      const results = await authApiRequest.login(values);
      await authApiRequest.auth({
        accessToken: results?.tokens?.accessToken,
        refreshToken: results?.tokens?.refreshToken,
        clientId: results?.user._id,
        expiresAt: results?.expiresAt,
      });
      toast({
        title: "Thông báo",
        description: "Đăng nhập thành công",
        variant: "success",
        duration: 2000,
      });
      const isAdmin = results.user.role === "admin";
      if (isAdmin) {
        router.push("/admin/dashboard");
        return;
      } else {
        router.push("/");
      }
      router.refresh();
    } catch (error) {
      handleErrorApi({
        error,
        setError: form.setError,
      });
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
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 mt-4 mb-10 ">
          <button className="text-base font-semibold leading-4 text-accent transition-all hover:underline">
            Forgot Password?
          </button>
          <Button className="hover:bg-[#02A189] w-full bg-[#00BA9D] border-min border-solid border-[#01C8A9] rounded-[23px] max-w-sm text-base font-semibold">
            Log In
          </Button>
        </div>
      </form>
    </Form>
  );
}
