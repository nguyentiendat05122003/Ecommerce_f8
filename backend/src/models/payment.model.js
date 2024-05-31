import mongoose from "mongoose";
const paymentSchema = new mongoose.Schema(
  {
    address: {
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
          price: Number,
        },
      ],
      require: true,
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
