"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  addProduct,
  deleteAllProduct,
  deleteProduct,
} from "@/lib/features/listProductCompareSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { CirclePlus, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function ListCompare({ item, customClassName }) {
  const { _id, name, thumbs } = item;
  const dispatch = useAppDispatch();
  const listProductCompare = useAppSelector(
    (state) => state.listProductCompare.listProduct
  );
  const handleRemoveItem = (id) => {
    dispatch(deleteProduct(id));
  };
  const handleRemoveAll = () => {
    dispatch(deleteAllProduct());
  };
  const handleClickCompare = () => {
    dispatch(addProduct(item));
  };
  return (
    <Sheet>
      <SheetTrigger>
        {listProductCompare.filter((element) => element._id === _id).length >
        0 ? (
          <p
            className={`${
              customClassName
                ? customClassName
                : "w-full absolute bottom-5 left-5 mt-2 xl:flex  items-center font-bold text-[10px]  text-accent gap-1"
            }`}
          >
            <CirclePlus size={15} />
            <span className="text-sm">Đã thêm so sánh</span>
          </p>
        ) : (
          <p
            onClick={handleClickCompare}
            className={`${
              customClassName
                ? customClassName
                : "w-full absolute bottom-5 left-5 mt-2 xl:flex  items-center font-bold text-[10px]  text-accent gap-1"
            }`}
          >
            <CirclePlus size={15} />
            <span className="text-sm">So sánh</span>
          </p>
        )}
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="drop-shadow-main max-w-[1178px] p-0 m-auto"
      >
        <div className="h-[120px] flex">
          <ul className="inline-flex  h-full">
            {listProductCompare.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="relative w-[294px] max-w-[294px] flex flex-col justify-center items-center  border-solid border-inputBorder border-r-min"
                >
                  {item?._id ? (
                    <>
                      <Image
                        className=" rounded max-w-[80px] object-contain m-[5px] h-auto"
                        width={60}
                        height={100}
                        alt="test"
                        src={item.thumbs[0].thumb_url}
                      />
                      <h3 className="m-[5px] text-center text-header text-[13px] font-normal">
                        {item.name}
                      </h3>
                      <SheetClose>
                        <X
                          size={15}
                          onClick={() => {
                            handleRemoveItem(item._id);
                          }}
                          className="absolute right-1 top-1 cursor-pointer"
                        />
                      </SheetClose>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-[45px] h-[45px] rounded flex items-center justify-center border-min border-dashed border-inputBorder">
                          <Plus />
                        </div>
                        <p className="text-sm font-normal">Thêm sản phẩm</p>
                      </div>
                      <SheetClose>
                        <X
                          size={15}
                          className="absolute right-1 top-1 cursor-pointer"
                        />
                      </SheetClose>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="flex-1 flex flex-col items-center justify-center gap-2">
            {listProductCompare.filter((item) => item._id).length > 1 ? (
              <>
                <button className="p-3 text-sm bg-accent rounded">
                  <Link href="/compareProduct">So sánh ngay</Link>
                </button>
              </>
            ) : (
              <>
                <button className="p-3 text-sm bg-gray rounded">
                  So sánh ngay
                </button>
              </>
            )}

            <p
              onClick={handleRemoveAll}
              className="text-sm font-bold text-accent cursor-pointer"
            >
              Xóa tất cả sản phẩm
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
