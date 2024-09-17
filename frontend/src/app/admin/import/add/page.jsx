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
import { columns } from "@/app/checkout/column";
import productApiRequest from "@/apiRequests/product";
import providerApiRequest from "@/apiRequests/provider";
import { columnsDetailImport } from "@/app/admin/import/components/columnsDetailImport";
import importApiRequest from "@/apiRequests/import";
import Loading from "@/app/loading";

export default function Page() {
  const router = useRouter();
  const [listProduct, setListProduct] = useState([]);
  const [provider, setProvider] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      const products = await productApiRequest.getAllProductsFull();
      const provider = await providerApiRequest.getAll();
      setListProduct(products.data);
      setProvider(provider.data);
    };
    fetchApi();
  }, []);

  const { toast } = useToast();
  const form = useForm({
    defaultValues: {
      product: "",
      provider: "",
      quantity: "",
      price: "",
    },
  });

  const onSubmit = (values) => {
    const selectedProduct = listProduct.find(
      (product) => product._id === values.product
    );

    setTableData((prevData) => [
      ...prevData,
      {
        productId: selectedProduct,
        provider: values.provider,
        quantity: values.quantity,
        price: values.price,
      },
    ]);
    form.reset(); // Reset the form fields after adding the data
  };
  const handleCreateImport = async () => {
    const total_amount = tableData.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    const products = tableData.map((item) => ({
      product: item.productId._id,
      quantity: item.quantity,
      price: item.price,
    }));
    const user = JSON.parse(localStorage.getItem("user"))._id;
    const provider = tableData.length > 0 ? tableData[0].provider : "";
    setLoading(true);
    const result = await importApiRequest.createImport({
      provider,
      user,
      products,
      total_amount,
    });
    setLoading(false);
    toast({
      title: "Thông báo",
      description: "Thêm hóa đơn thành công",
      variant: "success",
      duration: 500,
    });
    setTableData([]);
  };

  return (
    <div>
      <PageHeader title="Thêm hóa đơn nhập" />
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <div className="bg-widget rounded-md drop-shadow-main pb-[10px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex items-center justify-between gap-4 flex-wrap p-[26px]">
                <FormField
                  control={form.control}
                  name="product"
                  render={({ field }) => (
                    <FormItem>
                      <Label>
                        <span className="font-bold text-gray text-xs">
                          Sản phẩm
                        </span>
                      </Label>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        name="product"
                      >
                        <FormControl className="w-[500px]">
                          <SelectTrigger className="h-[43px] mt-2 text-xs">
                            <SelectValue placeholder="Chọn sản phẩm" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {listProduct.map((item, idx) => (
                            <SelectItem key={idx} value={item._id}>
                              {item.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className="mt-1 text-xs text-red" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="provider"
                  render={({ field }) => (
                    <FormItem>
                      <Label>
                        <span className="font-bold text-gray text-xs">
                          Nhà cung cấp
                        </span>
                      </Label>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        name="provider"
                      >
                        <FormControl className="w-[500px]">
                          <SelectTrigger className="h-[43px] mt-2 text-xs">
                            <SelectValue placeholder="Chọn nhà cung cấp" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {provider.map((item, idx) => (
                            <SelectItem key={idx} value={item._id}>
                              {item.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className="mt-1 text-xs text-red" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <span className="font-bold text-gray text-xs">
                        Số lượng
                      </span>
                      <FormControl>
                        <Input
                          className="mt-0 w-[500px] focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                          placeholder="Nhập số lượng sản phẩm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="mt-1 text-xs text-red" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <span className="font-bold text-gray text-xs">Giá</span>
                      <FormControl>
                        <Input
                          className="mt-0 w-[500px] focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
                          placeholder="Nhập giá sản phẩm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="mt-1 text-xs text-red" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-end p-[26px]">
                <Button
                  className="text-white mt-[26px] text-base hover:bg-[#02A189] bg-[#00BA9D] border-min border-solid border-[#01C8A9] font-bold rounded-[23px]"
                  type="submit" // Set the button type to submit
                >
                  Thêm sản phẩm
                </Button>
              </div>
            </form>
          </Form>
          <div className="px-[26px]">
            <DataTable data={tableData} columns={columnsDetailImport} />
          </div>
          <div className="mt-3 flex justify-end px-[26px]">
            <Button
              onClick={handleCreateImport}
              className="text-white px-[26px] text-base hover:bg-[#02A189] bg-[#00BA9D] border-min border-solid border-[#01C8A9] font-bold rounded-[23px]"
            >
              Tạo hóa đơn
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
