"use client";
import productApiRequest from "@/apiRequests/product";
import AddProductForm from "@/app/admin/product/_components/AddProductForm";
import PageHeader from "@/components/PageHeader";
import { useEffect, useState } from "react";

export default function page({ params }) {
  const [product, setProduct] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      const { data } = await productApiRequest.getProduct(params.id);
      setProduct(data);
    };
    fetchApi();
  }, []);
  return (
    <div>
      <PageHeader title="Sửa sản phẩm" />
      <div className="bg-widget rounded-md  drop-shadow-main p-[26px]">
        <h5 className="mb-[15px] text-header text-xl font-bold">
          Thông tin sản phẩm
        </h5>
        {product && <AddProductForm product={product} />}
      </div>
    </div>
  );
}
