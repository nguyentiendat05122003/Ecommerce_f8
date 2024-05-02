import { RefreshCcw, ShieldCheck } from "lucide-react";
export default function Insurance() {
  return (
    <div className="hidden xl:flex mt-[26px] mr-[16px] pt-[12px] max-w-[585px]">
      <ul className="flex flex-wrap">
        <li className="pr-[20px] pb-2 flex items-center gap-2 w-[50%] border-b-[1px] border-solid border-accent">
          <RefreshCcw className="w-[32px] h-[32px]" />
          <p className="text-xs line-clamp-2 leading-5">
            Hư gì đổi nấy <span className="text-xs text-red">12 tháng</span> tại
            3158 siêu thị toàn quốc (miễn phí tháng đầu){" "}
            <span className="text-[13px] text-accent">Xem chi tiết</span>
          </p>
        </li>
        <li className="pr-[20px] pb-2 flex items-center gap-2 w-[50%] border-b-[1px] border-solid border-accent">
          <ShieldCheck className="w-[32px] h-[32px]" />
          <p className="text-xs line-clamp-2 leading-5">
            Bảo hành{" "}
            <span className="text-xs text-red">chính hãng laptop 2 năm</span>
            tại các trung tâm bảo hành hãng{" "}
            <span className="text-[13px] text-accent">
              Xem địa chỉ bảo hành
            </span>
          </p>
        </li>
        <li className="mt-4 pr-[20px] pb-2 flex items-center gap-2 w-[50%]">
          <ShieldCheck className="w-[32px] h-[32px]" />
          <p className="text-xs line-clamp-2 leading-5">
            Hư gì đổi nấy <span className="text-xs text-red">12 tháng</span> tại
            3158 siêu thị toàn quốc (miễn phí tháng đầu){" "}
            <span className="text-[13px] text-accent">Xem chi tiết</span>
          </p>
        </li>
      </ul>
    </div>
  );
}
