"use client";
import reviewApiRequest from "@/apiRequests/reviews";
import SearchComp from "@/app/admin/product/_components/Search";
import { columns } from "@/app/admin/review/column";
import Loading from "@/app/loading";
import CustomDeleteDialog from "@/components/CustomDeleteDialog";
import { DataTable } from "@/components/DataTable";
import PageHeader from "@/components/PageHeader";
import { CirclePlus, Trash } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function page() {
  const [listReview, setListReview] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      const { data } = await reviewApiRequest.getAllReview();
      setListReview(data);
      setLoading(false);
    };
    fetchApi();
  }, []);

  return (
    <div>
      <PageHeader title="Quản Lý Đánh Giá" />
      <div className="flex flex-col-reverse gap-4 mb-5 md:flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-4 md:flex-row md:gap-[14px]">
          <Link href="/admin/product/add">
            <button className="bg-green border-min border-solid border-green text-white h-searchHeight rounded-[23px] flex items-center justify-center gap-[16px] text-base px-[26px] transition-all cursor-pointer font-semibold">
              Thêm đánh giá <CirclePlus size={18} />
            </button>
          </Link>

          <CustomDeleteDialog
            onClick={() => handleDeleteProduct()}
            Component={
              <button className="bg-red border-min border-solid border-red text-white h-searchHeight rounded-[23px] flex items-center justify-center gap-[16px] text-base px-[26px] transition-all cursor-pointer font-semibold">
                Xóa đánh giá <Trash size={18} />
              </button>
            }
            title="Bạn chắc có chắc muốn xóa đánh giá này không ?"
          />
        </div>
        <SearchComp className="lg:w-[326px]" placeholder="Tìm kiếm đánh giá" />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-header">Đánh giá:</span>
          <button className="pr-[14px] mr-[14px] border-right-[2px] border-solid border-header inline-flex items-center gap-[8px]">
            <span className="text-header text-sm font-bold ">Tất cả</span>
            <span className="text-[#E2E1E1] text-sm">
              ({listReview.length})
            </span>
          </button>
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-widget rounded-md drop-shadow-main pb-[10px]">
          <DataTable data={listReview} columns={columns} />
        </div>
      )}
    </div>
  );
}
