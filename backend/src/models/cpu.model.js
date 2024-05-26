import mongoose from "mongoose";
const CPUSchema = new mongoose.Schema(
  {
    value: {
      type: String,
    },
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
      type: String,
      required: true,
    },
    maximum_CPU_speed: {
      type: String,
    },
    cache: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const CPU = mongoose.model("CPU", CPUSchema);

export default CPU;
