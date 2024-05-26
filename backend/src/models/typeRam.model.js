import mongoose from "mongoose";
const typeRamSchema = new mongoose.Schema(
  {
    value: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const TypeRam = mongoose.model("TypeRam", typeRamSchema);

export default TypeRam;
