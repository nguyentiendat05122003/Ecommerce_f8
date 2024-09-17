"use client";
import importApiRequest from "@/apiRequests/import";
import { columns } from "@/app/admin/import/components/columns";
import SearchComp from "@/app/admin/product/_components/Search";
import Loading from "@/app/loading";
import CustomDeleteDialog from "@/components/CustomDeleteDialog";
import { DataTable } from "@/components/DataTable";
import PageHeader from "@/components/PageHeader";
import PaginationComp from "@/components/Pagination";
import { CirclePlus, FilePenLine, Trash } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function page() {
  const [listImport, setListImport] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchApi = async () => {
      const { data } = await importApiRequest.getAll();

      setListImport(data);
      setLoading(false);
    };
    fetchApi();
  }, []);
  return (
    <div>
      <PageHeader title="Quản lý hóa đơn nhập" />
      <div className="flex flex-col-reverse gap-4 mb-5 md:flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-4 md:flex-row md:gap-[14px]">
          <Link href="/admin/import/add">
            <button className="bg-green border-min border-solid border-green text-white h-searchHeight rounded-[23px] flex items-center justify-center gap-[16px] text-base px-[26px] transition-all cursor-pointer font-semibold">
              Thêm hóa đơn nhập <CirclePlus size={18} />
            </button>
          </Link>
          <CustomDeleteDialog
            Component={
              <button className="bg-red border-min border-solid border-red text-white h-searchHeight rounded-[23px] flex items-center justify-center gap-[16px] text-base px-[26px] transition-all cursor-pointer font-semibold">
                Xóa hóa đơn nhập <Trash size={18} />
              </button>
            }
            title="Bạn chắc có chắc muốn xóa hóa đơn này không ?"
          />
        </div>
        <SearchComp
          className="lg:w-[326px]"
          placeholder="Tìm kiếm hóa đơn nhập"
        />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-header">Hóa đơn nhập:</span>
          <button className="pr-[14px] mr-[14px] border-right-[2px] border-solid border-header inline-flex items-center gap-[8px]">
            <span className="text-header text-sm font-bold ">Tất cả</span>
            <span className="text-[#E2E1E1] text-sm">
              ({listImport.length})
            </span>
          </button>
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="bg-widget rounded-md drop-shadow-main pb-[10px]">
            <DataTable
              onSelect={() => {}}
              data={listImport}
              columns={columns}
            />
            <PaginationComp />
          </div>
        </>
      )}
    </div>
  );
}
