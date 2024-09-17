import mongoose from "mongoose";
const messageSchema = new mongoose.Schema(
  {
    members: {
      type: [
        {
          type: mongoose.Schema.ObjectId,
          required: true,
          ref: "User",
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
