import mongoose from "mongoose";
const notificationSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "User",
    },
    payment: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "Payment",
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
notificationSchema.pre(/^find/, function (next) {
  this.populate({
    path: "sender",
    select: "email name photo",
  });
  next();
});

const Notification = mongoose.model("Notification", notificationSchema);

export default Notification;
