const mongoose = require("mongoose"); // Erase if already required

const cartSchema = new mongoose.Schema(
  {
    cart_state: {
      type: String,
      required: true,
      enum: ["active", "completed", "failed", "pending"],
      default: "active",
    },
    cart_products: {
      type: [
        {
          productId: {
            type: mongoose.Schema.ObjectId,
            ref: "Product",
          },
          quantity: Number,
        },
      ],
      required: true,
      default: [],
    },
    cart_userId: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

cartSchema.pre(/^find/, function (next) {
  this.populate({
    path: "cart_products.productId",
    select: "name price thumbs quantity",
  });
  next();
});
const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
