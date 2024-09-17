"use client";
import providerApiRequest from "@/apiRequests/provider";
import reviewApiRequest from "@/apiRequests/reviews";
import SearchComp from "@/app/admin/product/_components/Search";
import { columns } from "@/app/admin/provider/columns";
import Loading from "@/app/loading";
import CustomDeleteDialog from "@/components/CustomDeleteDialog";
import { DataTable } from "@/components/DataTable";
import PageHeader from "@/components/PageHeader";
import { CirclePlus, Trash } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function page() {
  const [listProvider, setListProvider] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      const { data } = await providerApiRequest.getAll();
      setListProvider(data);
      setLoading(false);
    };
    fetchApi();
  }, []);

  return (
    <div>
      <PageHeader title="Quản Lý Nhà Cung Cấp" />
      <div className="flex flex-col-reverse gap-4 mb-5 md:flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-4 md:flex-row md:gap-[14px]">
          <Link href="/admin/product/add">
            <button className="bg-green border-min border-solid border-green text-white h-searchHeight rounded-[23px] flex items-center justify-center gap-[16px] text-base px-[26px] transition-all cursor-pointer font-semibold">
              Thêm nhà cung cấp <CirclePlus size={18} />
            </button>
          </Link>

          <CustomDeleteDialog
            onClick={() => handleDeleteProduct()}
            Component={
              <button className="bg-red border-min border-solid border-red text-white h-searchHeight rounded-[23px] flex items-center justify-center gap-[16px] text-base px-[26px] transition-all cursor-pointer font-semibold">
                Xóa nhà cung cấp <Trash size={18} />
              </button>
            }
            title="Bạn chắc có chắc muốn xóa nhà cung cấp này không ?"
          />
        </div>
        <SearchComp
          className="lg:w-[326px]"
          placeholder="Tìm kiếm nhà cung cấp"
        />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-header">Nhà cung cấp:</span>
          <button className="pr-[14px] mr-[14px] border-right-[2px] border-solid border-header inline-flex items-center gap-[8px]">
            <span className="text-header text-sm font-bold ">Tất cả</span>
            <span className="text-[#E2E1E1] text-sm">
              ({listProvider.length})
            </span>
          </button>
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-widget rounded-md drop-shadow-main pb-[10px]">
          <DataTable data={listProvider} columns={columns} />
        </div>
      )}
    </div>
  );
}
