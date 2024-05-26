import mongoose from "mongoose";
const screenSchema = new mongoose.Schema(
  {
    screenSize: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "ScreenSize",
    },
    screenResolution: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "ScreenResolution",
    },
    screenRefreshRate: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "ScreenRefreshRate",
    },
    screen_technology: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);
screenSchema.pre(/^find/, function (next) {
  this.populate({
    path: "screenSize",
    select: "size",
  })
    .populate({
      path: "screenResolution",
      select: "value",
    })
    .populate({
      path: "screenRefreshRate",
      select: "value",
    });
  next();
});
const Screen = mongoose.model("Screen", screenSchema);

export default Screen;
