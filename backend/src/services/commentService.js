import Comment from "~/models/comment.model";
import { factory } from "./handlerFactory";
import AppError from "~/utils/AppError";

const getComment = async (req) => {
  const productId = req.headers.product_id;
  const commentParentId = req.params.id;
  if (commentParentId) {
    const parent = await Comment.findById({ _id: commentParentId });
    if (!parent) throw new AppError("Comment not found");
    const comments = await Comment.find({
      productId: productId,
      comment_parentId: commentParentId,
      comment_left: { $gt: parent.comment_left },
      comment_right: { $lte: parent.comment_right },
    })
      .select({
        comment_left: 1,
        comment_right: 1,
        content: 1,
        comment_parentId: 1,
      })
      .sort({
        comment_left: 1,
      });
    console.log(comments);
    return comments;
  }
};
const createComment = async (req) => {
  const { productId, userId, content, commentParentId, rating } = req.body;
  const comment = new Comment({
    productId: productId,
    userId: userId,
    comment_parentId: commentParentId || null,
    content: content,
    rating: rating,
  });
  let rightValue;
  if (commentParentId) {
    const parentComment = await Comment.findById({
      _id: commentParentId,
    });
    if (!parentComment) throw new AppError("Comment not found");
    rightValue = parentComment.comment_right;
    //update many Comment
    await Comment.updateMany(
      {
        productId,
        comment_right: { $gte: rightValue },
      },
      {
        $inc: { comment_right: 2 },
      }
    );
    await Comment.updateMany(
      {
        productId,
        comment_left: { $gt: rightValue },
      },
      {
        $inc: { comment_left: 2 },
      }
    );
  } else {
    const maxRightValue = await Comment.findOne(
      {
        productId,
      },
      "comment_right",
      { sort: { comment_right: -1 } }
    );
    if (maxRightValue) {
      rightValue = maxRightValue.comment_right + 1;
    } else {
      rightValue = 1;
    }
  }
  comment.comment_left = rightValue;
  comment.comment_right = rightValue + 1;
  await comment.save();
  const populatedComment = await Comment.findById(comment._id).populate(
    "userId"
  );
  return populatedComment;
};
const getAllComment = factory.getAll(Comment, { comment_parentId: null });
const updateComment = factory.updateOne(Comment);
const deleteOneComment = async (req) => {
  const { productId } = req.body;
  const commentId = req.params.id;
  const comment = await Comment.findById({ _id: commentId });
  const leftValue = comment.comment_left;
  const rightValue = comment.comment_right;
  const range = rightValue - leftValue + 1;
  await Comment.deleteMany({
    productId: productId,
    comment_left: { $gte: Number(leftValue), $lte: Number(rightValue) },
  });

  await Comment.updateMany(
    {
      productId: productId,
      comment_right: { $gt: rightValue },
    },
    {
      $inc: { comment_right: range * -1 },
    }
  );

  await Comment.updateMany(
    {
      productId: productId,
      comment_left: { $gt: rightValue },
    },
    {
      $inc: { comment_left: range * -1 },
    }
  );
};
export const commentService = {
  getComment,
  getAllComment,
  updateComment,
  deleteOneComment,
  createComment,
};
