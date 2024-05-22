"use client";
import CustomDeleteDialog from "@/components/CustomDeleteDialog";
import RatingStart from "@/components/RatingStart";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CircleCheck } from "lucide-react";

export default function Message({
  avatar = "https://github.com/shadcn.png",
  message,
  name,
  role = "user",
  isReply = false,
  time,
  ratingNumber = 5,
  isComment = false,
  isDelete = false,
  reviewId,
  commentId,
  onDelete,
  subCommentNum,
  onOpenSubComment,
  comment,
}) {
  const onClick = () => {
    onDelete(reviewId);
  };
  return (
    <div
      className={`w-full flex item-start mt-3 ${isReply ? "ml-[50px]" : ""}`}
    >
      <Avatar className="w-[48px] h-[48px] ">
        <AvatarImage src={avatar} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div
        className={`${
          isReply
            ? "px-2 py-3 border-min border-solid border-inputBorder rounded-md"
            : ""
        }"avatar-info ml-3 flex-1"`}
      >
        <div className="name text-md font-semibold ">
          <div className="flex items-center gap-1">
            {name}
            {!isComment && (
              <>
                <CircleCheck size={15} color="#00b89c" />
                <span className="text-green text-xs font-semibold">
                  Đã mua tại FPTShop
                </span>
              </>
            )}
            {role === "admin" ? (
              <>
                <span className="sm:flex hidden px-2 py-[3px] text-white dark:text-[#00193B] mr-1 text-xs  items-center justify-center font-medium rounded bg-green border-[2px] border-background">
                  Quản trị viên
                </span>
              </>
            ) : (
              <></>
            )}
          </div>

          {!isComment && <RatingStart number={ratingNumber} size={12} />}
        </div>

        <div className="name text-sm font-normal">{message}</div>
        <div className=" text-xs font-weight text-[#939ca3] flex gap-2">
          <span className="min-w-[20px]  text-xs font-weight text-[#939ca3]">
            {time}
          </span>

          {isComment && (
            <span className="font-bold text-xs  cursor-pointer text-accent transition-all hover:underline">
              Trả lời
            </span>
          )}

          {isDelete && (
            <CustomDeleteDialog
              Component={
                <span className="font-bold text-xs  cursor-pointer text-accent transition-all hover:underline">
                  Xóa
                </span>
              }
              onClick={onClick}
              title="Bạn chắc có muốn xóa review này không ?"
            />
          )}
        </div>
      </div>
    </div>
  );
}
