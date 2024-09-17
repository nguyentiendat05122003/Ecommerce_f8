"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  formatTimeMessage,
  removeUsername,
  removeWhiteSpaces,
} from "@/lib/utils";
import { useState } from "react";
import { useForm } from "react-hook-form";
export default function CommentItem({ comment, onClick, onDelete }) {
  const [showReplies, setShowReplies] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const handleToggleReplies = () => {
    setShowReplies(!showReplies);
  };
  const form = useForm({
    defaultValues: {
      comment: `@${removeWhiteSpaces(comment.userId.name || "")} `,
    },
  });
  const onSubmit = (values) => {
    const message = values.comment;
    const formatContentMessage = removeUsername(message, message.split(" ")[0]);
    onClick({
      content: formatContentMessage,
      userId: user._id,
      commentParentId: comment._id,
    });
    form.reset();
  };
  const handleDeleteComment = async () => {
    onDelete(comment._id);
  };
  return (
    <div
      className="w-full"
      style={{
        marginLeft: comment.comment_parentId ? 20 : 0,
        padding: 10,
        marginBottom: 10,
      }}
    >
      <div className="flex items-start gap-2">
        <img
          src={comment.userId.photo}
          alt={comment.userId.name}
          style={{ width: 50, height: 50, borderRadius: "50%" }}
        />
        <div className="flex flex-col">
          <div className="text-md font-semibold">{comment.userId.name}</div>
          <p className="text-sm font-normal">{comment.content}</p>
          <div className="min-w-[20px]  text-xs font-weight text-[#939ca3] flex gap-2">
            {formatTimeMessage(comment.createdAt)}
            <Dialog>
              <DialogTrigger asChild>
                <span className="font-bold text-xs  cursor-pointer text-accent transition-all hover:underline">
                  Phản hồi
                </span>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Trả lời</DialogTitle>
                </DialogHeader>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                      control={form.control}
                      name="comment"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage className="mt-1 text-xs text-red" />
                        </FormItem>
                      )}
                    />
                    <DialogClose
                      type="submit"
                      className="bg-[#0071e3] px-4 py-2 rounded text-sm font-semibold mt-4 float-right cursor-default text-white hover:bg-[#0071e3]"
                    >
                      Hoàn tất
                    </DialogClose>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
            {comment.userId._id === user._id && (
              <span
                onClick={handleDeleteComment}
                className="font-bold text-xs  cursor-pointer text-accent transition-all hover:underline"
              >
                Xóa
              </span>
            )}
          </div>
          {comment.subComments && comment.subComments.length > 0 && (
            <div className="w-full">
              <button
                className="text-sm font-bold"
                onClick={handleToggleReplies}
              >
                {showReplies
                  ? "Ẩn phản hồi"
                  : `Xem thêm ${comment.subComments.length} phản hồi`}
              </button>
              {showReplies && (
                <div style={{ marginTop: 2 }}>
                  {comment.subComments.map((subComment) => (
                    <CommentItem
                      onClick={onClick}
                      onDelete={onDelete}
                      key={subComment._id}
                      comment={subComment}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
