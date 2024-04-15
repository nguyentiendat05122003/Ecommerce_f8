const mongoose = require("mongoose"); // Erase if already required

const supplierInvoiceSchema = new mongoose.Schema(
  {
    products: {
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

const SupplierInvoice = mongoose.model(
  "SupplierInvoice",
  supplierInvoiceSchema
);

export default SupplierInvoice;
