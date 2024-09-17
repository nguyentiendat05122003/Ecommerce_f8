"use client";
import userApiRequest from "@/apiRequests/users";
import { columns } from "@/app/admin/customer/column";
import SearchComp from "@/app/admin/product/_components/Search";
import Loading from "@/app/loading";
import CustomDeleteDialog from "@/components/CustomDeleteDialog";
import { DataTable } from "@/components/DataTable";
import PageHeader from "@/components/PageHeader";
import { CirclePlus, Trash } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function page() {
  const [listUser, setListUser] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      const { data } = await userApiRequest.getUserRoleUser();
      setListUser(data);
      setLoading(false);
    };
    fetchApi();
  }, []);

  return (
    <div>
      <PageHeader title="Quản Lý Khách Hàng" />
      <div className="flex flex-col-reverse gap-4 mb-5 md:flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-4 md:flex-row md:gap-[14px]">
          <Link href="/admin/product/add">
            <button className="bg-green border-min border-solid border-green text-white h-searchHeight rounded-[23px] flex items-center justify-center gap-[16px] text-base px-[26px] transition-all cursor-pointer font-semibold">
              Thêm khách hàng <CirclePlus size={18} />
            </button>
          </Link>

          <CustomDeleteDialog
            onClick={() => handleDeleteProduct()}
            Component={
              <button className="bg-red border-min border-solid border-red text-white h-searchHeight rounded-[23px] flex items-center justify-center gap-[16px] text-base px-[26px] transition-all cursor-pointer font-semibold">
                Xóa khách hàng <Trash size={18} />
              </button>
            }
            title="Bạn chắc có chắc muốn xóa khách hàng này không ?"
          />
        </div>
        <SearchComp
          className="lg:w-[326px]"
          placeholder="Tìm kiếm khách hàng"
        />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-header">Khách hàng:</span>
          <button className="pr-[14px] mr-[14px] border-right-[2px] border-solid border-header inline-flex items-center gap-[8px]">
            <span className="text-header text-sm font-bold ">Tất cả</span>
            <span className="text-[#E2E1E1] text-sm">({listUser.length})</span>
          </button>
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-widget rounded-md drop-shadow-main pb-[10px]">
          <DataTable data={listUser} columns={columns} />
        </div>
      )}
    </div>
  );
}
