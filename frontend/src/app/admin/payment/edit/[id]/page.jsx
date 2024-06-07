"use client";
import paymentApiRequest from "@/apiRequests/payment";
import { columnsDetailPayment } from "@/app/admin/payment/components/columnsDetailPayment";
import { DataTable } from "@/components/DataTable";
import PageHeader from "@/components/PageHeader";
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
import { formatPrice } from "@/lib/utils";
import moment from "moment";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
export default function page({ params }) {
  const [payment, setPayment] = useState();
  const router = useRouter();

  const { toast } = useToast();
  useEffect(() => {
    const fetchApi = async () => {
      const { data } = await paymentApiRequest.getDetailPayment(params.id);
      setPayment(data);
    };
    fetchApi();
  }, [params]);
  const form = useForm({
    defaultValues: {
      address: "",
      createdAt: "",
      location: "",
      name: "",
      phone: "",
      state: "",
      total_amount: "",
      paid: "",
    },
  });
  useEffect(() => {
    if (payment) {
      form.reset({
        address: payment.address || "",
        createdAt:
          moment(payment.createdAt).format("YYYY-MM-DD HH:mm:ss") || "",
        location: payment.location || "",
        name: payment.name || "",
        phone: payment.phone || "",
        state: payment.state || "",
        paid: payment.paid ? "true" : "false" || "",
        total_amount: formatPrice(payment.total_amount) || "",
      });
    }
  }, [payment, form.reset]);
  const onSubmit = async (values) => {
    values.total_amount = payment?.total_amount;
    const result = await paymentApiRequest.updatePayment(payment?._id, values);
    toast({
      title: "Thông báo",
      description: "Sửa hóa đơn thành công",
      variant: "success",
      duration: 500,
    });
    router.push("/admin/payment");
  };
  return (
    <div>
      <PageHeader title="Chi tiết hóa đơn" />
      <div className="bg-widget rounded-md drop-shadow-main pb-[10px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex items-center justify-between gap-4 flex-wrap p-[26px]">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <span className="font-bold text-gray text-xs">
                      Tên người mua
                    </span>
                    <FormControl>
                      <Input
                        className="mt-0 w-[500px] focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                        placeholder="Nhập tên người mua"
                        {...field}
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
                    <span className="font-bold text-gray text-xs">
                      Số điện thoại
                    </span>
                    <FormControl>
                      <Input
                        className="mt-0 w-[500px] focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                        placeholder="Nhập số điện thoại"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="mt-1 text-xs text-red" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <span className="font-bold text-gray text-xs">Địa chỉ</span>
                    <FormControl>
                      <Input
                        className="mt-0 w-[500px] focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                        placeholder="Nhập địa chỉ"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="mt-1 text-xs text-red" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <span className="font-bold text-gray text-xs">
                      Ví trí cụ thể
                    </span>
                    <FormControl>
                      <Input
                        className="mt-0 w-[500px] focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                        placeholder="Nhập địa chỉ"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="mt-1 text-xs text-red" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="total_amount"
                render={({ field }) => (
                  <FormItem>
                    <span className="font-bold text-gray text-xs">
                      Tổng tiền
                    </span>
                    <FormControl>
                      <Input
                        className="mt-0 w-[500px] focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                        placeholder="Nhập địa chỉ"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="mt-1 text-xs text-red" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="createdAt"
                render={({ field }) => (
                  <FormItem>
                    <span className="font-bold text-gray text-xs">
                      Ngày tạo
                    </span>
                    <FormControl>
                      <Input
                        className="mt-0 w-[500px] focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                        placeholder="Nhập địa chỉ"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="mt-1 text-xs text-red" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <Label>
                      <span className="font-bold text-gray text-xs">
                        Trạng thái đơn hàng
                      </span>
                    </Label>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value || ""}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-[43px] w-[500px]  mt-2 text-xs">
                          <SelectValue placeholder="Chọn trạng thái hóa đơn" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="pending">Chờ xác nhận</SelectItem>
                        <SelectItem value="failed">Thất bại</SelectItem>
                        <SelectItem value="completed">Thành công</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="mt-1 text-xs text-red" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="paid"
                render={({ field }) => (
                  <FormItem>
                    <Label>
                      <span className="font-bold text-gray text-xs">
                        Thanh toán
                      </span>
                    </Label>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value || ""}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-[43px] w-[500px]  mt-2 text-xs">
                          <SelectValue placeholder="Chọn trạng thái thanh toán" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="true">Thành công</SelectItem>
                        <SelectItem value="false">Chưa thanh toán</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="mt-1 text-xs text-red" />
                  </FormItem>
                )}
              />
            </div>
            <div className="px-[26px]">
              {payment && (
                <DataTable
                  data={payment?.detail_payment}
                  columns={columnsDetailPayment}
                />
              )}
            </div>
            <div className="mt-3 flex justify-end px-[26px]">
              <Button className="text-white px-[26px] text-base  hover:bg-[#02A189] bg-[#00BA9D] border-min border-solid border-[#01C8A9]  font-bold rounded-[23px]">
                Lưu hóa đơn
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
