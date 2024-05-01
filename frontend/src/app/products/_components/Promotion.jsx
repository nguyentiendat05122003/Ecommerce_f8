export default function Promotion() {
  return (
    <div className="mt-4 card flex gap-3 flex-col  bg-widget drop-shadow-main rounded-[6px] transition-all">
      <div className="px-[15px] py-[10px] border-solid border-b-min border-accent">
        <h4 className="text-sm">Khuyến mãi</h4>
        <p className="text-xs">
          Giá và khuyến mãi dự kiến áp dụng đến 23:00 | 01/05
        </p>
      </div>
      <div className="px-[15px] py-[10px] border-b-min border-accent border-dashed">
        <ul className="flex flex-col gap-4">
          <li className="text-xs flex items-center">
            <span className="text-white dark:text-[#00193B] mr-1 text-xs flex items-center justify-center font-medium w-6 h-6 rounded-full bg-green border-[2px] border-background">
              1
            </span>
            Giảm thêm 200.000đ cho Học sinh - Sinh viên (cấp THPT trở lên){" "}
            <span className="font-bold text-xs leading-[1.4] cursor-pointer text-accent transition-all hover:underline">
              Click xem chi tiết
            </span>
          </li>
          <li className="text-xs flex items-center">
            <span className="text-white dark:text-[#00193B] mr-1 text-xs flex items-center justify-center font-medium w-6 h-6 rounded-full bg-green border-[2px] border-background">
              2
            </span>
            Nhập mã VNPAYTGDD2 giảm ngay 1% (tối đa 200.000đ)
            <span className="font-bold text-xs leading-[1.4] cursor-pointer text-accent transition-all hover:underline">
              (Xem chi tiết tại đây)
            </span>
          </li>
        </ul>
      </div>
      <ul className="flex flex-col gap-4 px-[20px] py-[10px]">
        <li className="text-xs flex items-center">
          Giá hoặc khuyến mãi không áp dụng trả góp lãi suất đặc biệt (0%, 0.5%,
          1%, 1.5%, 2%)
        </li>
      </ul>
    </div>
  );
}
