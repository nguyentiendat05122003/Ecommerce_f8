const mongoose = require("mongoose"); // Erase if already required

const providerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    email: {
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

const Provider = mongoose.model("Provider", providerSchema);

export default Provider;
