import mongoose from "mongoose";
const ramSchema = new mongoose.Schema(
  {
    value: {
      type: String,
    },
    typeRam: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "TypeRam",
    },
    ram_bus_speed: {
      type: String,
      required: true,
    },
    maximum_supported_RAM: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
ramSchema.pre(/^find/, function (next) {
  this.populate({
    path: "typeRam",
    select: "value",
  });
  next();
});
const Ram = mongoose.model("Ram", ramSchema);

export default Ram;
