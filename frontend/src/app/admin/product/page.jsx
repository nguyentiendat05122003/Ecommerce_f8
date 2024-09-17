"use client";
import productApiRequest from "@/apiRequests/product";
import SearchComp from "@/app/admin/product/_components/Search";
import { columns } from "@/app/admin/product/_components/column";
import Loading from "@/app/loading";
import CustomDeleteDialog from "@/components/CustomDeleteDialog";
import { DataTable } from "@/components/DataTable";
import PageHeader from "@/components/PageHeader";
import PaginationComp from "@/components/Pagination";
import { useSearchParams } from "next/navigation";
import { CirclePlus, Trash } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function ProductManager() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [listProduct, setListProduct] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [listProductSelect, setListProductSelect] = useState([]);
  const [tableKey, setTableKey] = useState(Date.now());

  const queryParams = useMemo(() => {
    return {
      page: searchParams.get("page") || 1,
      limit: searchParams.get("limit") || 6,
      search: searchParams.get("name") || "",
    };
  }, [searchParams]);

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      const { data, result } = await productApiRequest.getAllProductsPagination(
        queryParams
      );
      setTotal(result);
      setListProduct(data);
      setLoading(false);
    };
    fetchApi();
  }, [queryParams]);

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

  const handleClickPage = (id) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", id);
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleChangeSearch = useDebouncedCallback((value) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("name", value);
    } else {
      params.delete("name");
    }
    router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div>
      <PageHeader title="Quản Lý Sản Phẩm" />
      <div className="flex flex-col-reverse gap-4 mb-5 md:flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-4 md:flex-row md:gap-[14px]">
          <Link href="/admin/product/add">
            <button className="bg-green border-min border-solid border-green text-white h-searchHeight rounded-[23px] flex items-center justify-center gap-[16px] text-base px-[26px] transition-all cursor-pointer font-semibold">
              Thêm sản phẩm mới <CirclePlus size={18} />
            </button>
          </Link>

          <CustomDeleteDialog
            onClick={() => handleDeleteProduct()}
            Component={
              <button className="bg-red border-min border-solid border-red text-white h-searchHeight rounded-[23px] flex items-center justify-center gap-[16px] text-base px-[26px] transition-all cursor-pointer font-semibold">
                Xóa sản phẩm <Trash size={18} />
              </button>
            }
            title="Bạn chắc có chắc muốn xóa sản phẩm này không ?"
          />
        </div>
        <SearchComp
          onChange={handleChangeSearch}
          className="lg:w-[326px]"
          defaultValue={searchParams.get("name")?.toString()}
          placeholder="Tìm kiếm sản phẩm"
        />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-header">Sản phẩm:</span>
          <button className="pr-[14px] mr-[14px] border-right-[2px] border-solid border-header inline-flex items-center gap-[8px]">
            <span className="text-header text-sm font-bold ">Tất cả</span>
            <span className="text-[#E2E1E1] text-sm">({total})</span>
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
          <PaginationComp
            totalPages={Math.ceil(total / queryParams.limit)}
            currentPage={parseInt(queryParams.page, 10)}
            onPageChange={handleClickPage}
          />
        </div>
      )}
    </div>
  );
}
