"use client";
import commentApiRequest from "@/apiRequests/comment";
import CommentItem from "@/components/CommentItem";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { clientSessionToken } from "@/lib/http";
import { useEffect, useState } from "react";
export default function Comment({ listComments, productId }) {
  const [commentsTree, setCommentsTree] = useState([]);
  const [valueComment, setValueComment] = useState("");
  const [commentList, setCommentList] = useState(listComments);
  useEffect(() => {
    const buildCommentsTree = (comments) => {
      const map = {};
      const roots = [];
      comments.forEach((comment) => {
        map[comment._id] = { ...comment, subComments: [] };
      });
      comments.forEach((comment) => {
        if (comment.comment_parentId) {
          if (map[comment.comment_parentId]) {
            map[comment.comment_parentId].subComments.push(map[comment._id]);
          }
        } else {
          roots.push(map[comment._id]);
        }
      });
      return roots;
    };

    const commentsTree = buildCommentsTree(commentList);
    setCommentsTree(commentsTree);
  }, [commentList]);
  const handleClickSend = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (clientSessionToken.token.accessToken) {
      const values = {
        content: valueComment,
        userId: user._id,
        productId: productId,
        commentParentId: null,
      };
      const newComment = await commentApiRequest.createComment(values);
      setValueComment("");
      setCommentList((prev) => [...prev, newComment]);
    }
  };
  const handleReplyComment = async (values) => {
    const newValue = { ...values, productId: productId };
    const newComment = await commentApiRequest.createComment(newValue);
    setCommentList((prev) => [...prev, newComment]);
  };
  const handleDeleteComment = async (id) => {
    const deleteMessage = await commentApiRequest.deleteComment(id, productId);
    setCommentList((prev) => prev.filter((item) => item._id !== id));
  };
  return (
    <div className="w-full card mt-10 flex gap-3 flex-col px-[20px] py-[15px] bg-widget drop-shadow-main rounded-[6px] transition-all">
      <div className=" py-[10px] border-solid border-b-min border-accent">
        <h4 className="text-base">Hỏi & Đáp</h4>
      </div>
      <div className="flex flex-col items-end justify-center  ">
        <Textarea
          value={valueComment}
          onChange={(e) => setValueComment(e.target.value)}
          className="focus:border-accent h-searchHeight px-[20px] bg-background rounded-lg border-min border-solid border-inputBorder"
          placeholder="Type your message here."
        />
        <Button
          onClick={handleClickSend}
          className="hover:bg-red max-w-[138px] mt-[8px] bg-red text-white dark:text-[#00193B] h-[36px] px-[16px] "
        >
          Send
        </Button>
      </div>
      <div className=" text-md font-medium text-left">
        {listComments.length} hỏi đáp về “Laptop HP 245 G10
        R5-7520U/8GB/256GB/14"FHD/Win11 (9H8X8PT)”
      </div>
      <div className="">
        {commentsTree.length > 0 &&
          commentsTree.map((comment) => (
            <CommentItem
              key={comment._id}
              onClick={handleReplyComment}
              onDelete={handleDeleteComment}
              comment={comment}
            />
          ))}
      </div>
    </div>
  );
}
