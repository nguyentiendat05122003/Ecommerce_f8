import mongoose from "mongoose";
const paymentSchema = new mongoose.Schema(
  {
    state: {
      type: String,
      required: true,
      enum: ["completed", "pending", "failed"],
      default: "pending",
    },
    address: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    location: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
    },
    paid: {
      type: Boolean,
      require: true,
      default: false,
    },
    total_amount: {
      type: Number,
      require: true,
    },
    detail_payment: {
      type: [
        {
          productId: {
            type: mongoose.Schema.ObjectId,
            required: true,
            ref: "Product",
          },
          quantity: Number,
        },
      ],
      require: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

paymentSchema.pre(/^find/, function (next) {
  this.populate({
    path: "detail_payment.productId",
    select: "name price thumbs",
  });
  next();
});

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
