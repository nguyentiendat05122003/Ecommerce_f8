import mongoose from "mongoose";
const cardSchema = new mongoose.Schema(
  {
    value: {
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

const Card = mongoose.model("Card", cardSchema);

export default Card;
