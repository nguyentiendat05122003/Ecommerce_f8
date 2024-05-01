import { Cpu, FileImage, HardDrive, MemoryStick, Monitor } from "lucide-react";
export default function InfoProduct() {
  return (
    <div className="max-w-[585px] card flex gap-3 flex-col px-[20px] py-[15px] bg-widget drop-shadow-main rounded-[6px] transition-all">
      <h6 className="flex gap-1 items-center text-sm font-bold text-input cursor-pointer">
        <FileImage size={20} />
        AMD Radeon Graphics
      </h6>
      <h6 className="flex gap-1 items-center text-sm font-bold text-input cursor-pointer">
        <Monitor size={20} />
        14 inch, 1920 x 1080 Pixels, IPS, 60, Anti-Glare
      </h6>
      <h6 className="flex gap-1 items-center text-sm font-bold text-input cursor-pointer">
        <Cpu size={20} />
        AMD, Ryzen 5, 7520U
      </h6>
      <h6 className="flex gap-1 items-center text-sm font-bold text-input cursor-pointer">
        <MemoryStick size={20} />8 GB (1 thanh 8 GB), DDR4
      </h6>
      <h6 className="flex gap-1 items-center text-sm font-bold text-input cursor-pointer">
        <HardDrive size={20} />
        SSD 256 GB
      </h6>
      <p className="font-bold text-xs leading-[1.4] cursor-pointer text-accent transition-all hover:underline">
        Xem chi tiết thông số kỹ thuật
      </p>
    </div>
  );
}
