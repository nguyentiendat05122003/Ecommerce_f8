import Product from "~/models/product.model";

const mongoose = require("mongoose"); // Erase if already required

const supplierInvoiceSchema = new mongoose.Schema(
  {
    products: {
      type: [
        {
          product: {
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
    total_amount: {
      type: Number,
      require: true,
    },
    provider: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "Provider",
    },
    user: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "User",
    },
    desc: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

supplierInvoiceSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name",
  })
    .populate({
      path: "products.product",
      select: "name thumbs",
    })
    .populate({
      path: "provider",
      select: "name",
    });

  next();
});

supplierInvoiceSchema.post("save", async function (doc) {
  for (const item of doc.products) {
    const product = await Product.findById(item.product);
    if (product) {
      product.quantity += item.quantity;
      await product.save();
    }
  }
});
const SupplierInvoice = mongoose.model(
  "SupplierInvoice",
  supplierInvoiceSchema
);

export default SupplierInvoice;
