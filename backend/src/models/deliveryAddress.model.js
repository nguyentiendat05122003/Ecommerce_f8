import mongoose from "mongoose";
const deliveryAddressSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: {
        province: {
          provinceId: { type: String, required: true },
          provinceName: { type: String, required: true },
        },
        district: {
          districtId: { type: String, required: true },
          districtName: { type: String, required: true },
        },
        ward: {
          wardId: { type: String, required: true },
          wardName: { type: String, required: true },
        },
      },
      required: true,
      default: [],
    },
    location: {
      type: String,
      require: true,
    },
    isDefault: {
      type: Boolean,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

const DeliveryAddress = mongoose.model(
  "DeliveryAddress",
  deliveryAddressSchema
);

export default DeliveryAddress;
