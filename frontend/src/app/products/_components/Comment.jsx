import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
export default function Comment() {
  return (
    <div className="w-full card mt-10 flex gap-3 flex-col px-[20px] py-[15px] bg-widget drop-shadow-main rounded-[6px] transition-all">
      <div className=" py-[10px] border-solid border-b-min border-accent">
        <h4 className="text-base">Hỏi & Đáp</h4>
      </div>
      <div className="flex flex-col items-center justify-center  ">
        <Textarea
          className="focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
          placeholder="Type your message here."
        />
      </div>
      <div className=" text-md font-medium text-left">
        1 hỏi đáp về “Laptop HP 245 G10 R5-7520U/8GB/256GB/14"FHD/Win11
        (9H8X8PT)”
      </div>
      <div className=" ">
        <div className="flex item-start">
          <Avatar className="w-[48px] h-[48px] ">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="avatar-info ml-3 flex-1">
            <div className="name text-md font-semibold">Huỳnh thu diễm</div>
            <div className="name text-sm font-normal">
              còn hàng ở huyện tri tôn tỉnh an giang không shop
            </div>
            <div className=" text-xs font-weight text-[#939ca3]">
              19 ngày trước
            </div>
          </div>
        </div>
        <div className="reply mt-[12px]">
          <div className="pl-[60px] flex items-start">
            <Avatar className="w-[48px] h-[48px] object-cover">
              <AvatarImage
                className="object-contain"
                src="https://fptshop.com.vn/api-data/comment/Content/desktop/images/logo.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="w-full ml-3 avatar-info px-2 py-3 border-min border-solid border-inputBorder rounded-md ">
              <div className="name text-md font-semibold flex items-center gap-1">
                Vũ Ánh Linh
                <span className="sm:flex hidden px-2 py-[3px] text-white dark:text-[#00193B] mr-1 text-xs  items-center justify-center font-medium rounded bg-green border-[2px] border-background">
                  Quản trị viên
                </span>
              </div>
              <div className="name text-sm font-normal">
                còn hàng ở huyện tri tôn tỉnh an giang không shop
              </div>
              <div className=" text-xs font-weight text-[#939ca3] flex items-center gap-1">
                19 ngày trước
                <span className="font-bold text-xs  cursor-pointer text-accent transition-all hover:underline">
                  Trả lời
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
