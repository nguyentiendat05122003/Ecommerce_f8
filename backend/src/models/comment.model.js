import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, "Review can not be empty!"],
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "User",
    },
    productId: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "Product",
    },
    comment_left: {
      type: Number || String,
      default: 0,
    },
    comment_right: {
      type: Number || String,
      default: 0,
    },
    comment_parentId: {
      type: mongoose.Schema.ObjectId,
      ref: "Comment",
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
