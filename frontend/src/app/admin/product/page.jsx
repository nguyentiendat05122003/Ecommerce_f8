"use client";
import productApiRequest from "@/apiRequests/product";
import SearchComp from "@/app/admin/product/_components/Search";
import { columns } from "@/app/admin/product/_components/column";
import Loading from "@/app/loading";
import CustomDeleteDialog from "@/components/CustomDeleteDialog";
import { DataTable } from "@/components/DataTable";
import PageHeader from "@/components/PageHeader";
import PaginationComp from "@/components/Pagination";

import { CirclePlus, Trash } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductManager() {
  const [listProduct, setListProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [listProductSelect, setListProductSelect] = useState([]);
  const [tableKey, setTableKey] = useState(Date.now()); // State để giữ key cho DataTable

  useEffect(() => {
    const fetchApi = async () => {
      const { data } = await productApiRequest.getAllProducts();
      setListProduct(data);
      setLoading(false);
    };
    fetchApi();
  }, []);

  const handleSelectItem = (items) => {
    setListProductSelect(items);
  };

  const handleDeleteProduct = async () => {
    const deleteProductSelect = listProductSelect.map((item) =>
      productApiRequest.deleteProduct(item._id)
    );
    await Promise.all(deleteProductSelect);

    setListProduct((prev) => {
      const idsToRemove = listProductSelect.map((item) => item._id);
      const newList = prev.filter((item) => !idsToRemove.includes(item._id));
      return newList;
    });

    setListProductSelect([]);
    setTableKey(Date.now());
  };

  return (
    <div>
      <PageHeader title="Products Management" />
      <div className="flex flex-col-reverse gap-4 mb-5 md:flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-4 md:flex-row md:gap-[14px]">
          <Link href="/admin/product/add">
            <button className="bg-green border-min border-solid border-green text-white h-searchHeight rounded-[23px] flex items-center justify-center gap-[16px] text-base px-[26px] transition-all cursor-pointer font-semibold">
              Add new product <CirclePlus size={18} />
            </button>
          </Link>

          <CustomDeleteDialog
            onClick={() => handleDeleteProduct()}
            Component={
              <button className="bg-red border-min border-solid border-red text-white h-searchHeight rounded-[23px] flex items-center justify-center gap-[16px] text-base px-[26px] transition-all cursor-pointer font-semibold">
                Delete products <Trash size={18} />
              </button>
            }
            title="Bạn chắc có chắc muốn xóa sản phẩm này không ?"
          />
        </div>
        <SearchComp className="lg:w-[326px]" placeholder="Search Product" />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-header">Products:</span>
          <button className="pr-[14px] mr-[14px] border-right-[2px] border-solid border-header inline-flex items-center gap-[8px]">
            <span className="text-header text-sm font-bold ">All</span>
            <span className="text-[#E2E1E1] text-sm">
              ({listProduct.length})
            </span>
          </button>
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-widget rounded-md drop-shadow-main pb-[10px]">
          <DataTable
            key={tableKey}
            onSelect={handleSelectItem}
            data={listProduct}
            columns={columns}
          />
        </div>
      )}
    </div>
  );
}
