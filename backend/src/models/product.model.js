import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name laptop"],
    },
    thumbs: {
      type: Array,
      // required: true,
    },
    detailImages: {
      type: Array,
      // required: true,
    },
    video: {
      type: String,
    },
    desc: {
      type: String,
      require: true,
    },
    slug: String,
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, "Rating must above 1.0"],
      max: [5, "Rating must under 5.0"],
      set: (val) => Math.round(val * 10) / 10,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
    brand: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "BrandProduct",
    },
    typeProduct: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "TypeProduct",
    },
    cpu: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "CPU",
    },
    disk: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "Disk",
    },
    ram: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "Ram",
    },
    typeBrand: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "TypeBrand",
    },
    screen: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "Screen",
    },
    specialFeatures: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "SpecialFeatures",
    },
    detailProduct: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "DetailProduct",
    },
    card: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "Card",
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
productSchema.virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "product",
  justOne: false,
});

productSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "productId",
  justOne: false,
});

productSchema.pre(/^find/, function (next) {
  this.populate({
    path: "brand",
    select: "name",
  })
    .populate({
      path: "ram",
    })
    .populate({
      path: "disk",
      select: "value",
    })
    .populate({
      path: "cpu",
    })
    .populate({
      path: "card",
      select: "value",
    })
    .populate({
      path: "typeBrand",
      select: "name",
    })
    .populate({
      path: "screen",
    })
    .populate({
      path: "specialFeatures",
      select: "value",
    })
    .populate({
      path: "typeProduct",
      select: "name",
    })
    .populate("detailProduct");

  next();
});
const Product = mongoose.model("Product", productSchema);

export default Product;
