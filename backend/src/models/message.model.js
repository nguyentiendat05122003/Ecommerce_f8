import mongoose from "mongoose";
const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "User",
    },
    receiver: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
messageSchema.pre(/^find/, function (next) {
  this.populate({
    path: "sender",
    select: "email name photo",
  });
  this.populate({
    path: "receiver",
    select: "email name photo",
  });
  next();
});

const Message = mongoose.model("Message", messageSchema);

export default Message;
