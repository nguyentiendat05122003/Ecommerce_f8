import mongoose from "mongoose";
const typeBrandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    brand: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "brand",
    },
  },
  {
    timestamps: true,
  }
);

const TypeBrand = mongoose.model("TypeBrand", typeBrandSchema);

export default TypeBrand;
