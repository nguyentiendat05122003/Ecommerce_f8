import mongoose from "mongoose";
const detailProductSchema = new mongoose.Schema(
  {
    //Đèn bàn phím
    keyboard_backlight: {
      type: String,
      required: true,
    },
    size: {
      type: String,
    },
    material: {
      type: String,
    },
    battery: {
      type: String,
    },

    //Công suất bộ sạc
    chargeCapacity: {
      type: String,
    },
    os: {
      type: String,
    },
    //Thời điểm ra mắt
    launchTime: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const DetailProduct = mongoose.model("DetailProduct", detailProductSchema);

export default DetailProduct;
