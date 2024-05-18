import mongoose from "mongoose";
const detailProductSchema = new mongoose.Schema(
  {
    //số nhân
    number_of_cores: {
      type: String,
      required: true,
    },
    //số luồng
    number_of_threads: {
      type: String,
      required: true,
    },
    //Tốc độ CPU
    CPU_speed: {
      type: Array,
      required: true,
    },
    //Tốc độ tối đa:
    maximum_CPU_speed: {
      type: String,
    },
    //Bộ nhớ đệm:
    cache: {
      type: String,
      require: true,
    },
    //Tốc độ Bus RAM
    ram_bus_speed: {
      type: String,
      required: true,
    },

    //Hỗ trợ RAM tối đa
    maximum_supported_RAM: {
      type: String,
      required: true,
    },

    //Công nghệ màn hình
    screen_technology: {
      type: String,
      require: true,
    },

    // Công nghệ âm thanh
    audio_technology: {
      type: String,
    },
    //Card màn hình
    card_screen: {
      type: String,
    },
    ports: {
      type: [
        {
          type: mongoose.Schema.ObjectId,
          ref: "OtherInfo",
        },
      ],
      // required: true,
    },

    //Kết nối không dây
    wireless_Connectivity: {
      type: String,
      required: true,
    },
    Webcam: {
      type: String,
    },

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
