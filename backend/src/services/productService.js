import Product from "~/models/product.model";
import { factory } from "./handlerFactory";
import { uploadDetailImageProduct, uploadThumbProduct } from "~/utils/Upload";
import mongoose from "mongoose";
import DetailProduct from "~/models/detailProduct.model";

const getProduct = factory.getOne(Product, [
  {
    path: "comments",
  },
  {
    path: "reviews",
  },
]);
const createProduct = async (req) => {
  const thumbs = [];
  const detailImages = [];
  if (req.files.thumbs)
    for (const file of req.files.thumbs) {
      const { path } = file;
      const newPath = await uploadThumbProduct({ path });
      thumbs.push(newPath);
    }
  if (req.files.detailImages) {
    for (const file of req.files.detailImages) {
      const { path } = file;
      const newPath = await uploadDetailImageProduct({ path });
      detailImages.push(newPath);
    }
  }
  req.body.thumbs = thumbs;
  req.body.detailImages = detailImages;
  const session = await mongoose.startSession();
  try {
    await session.startTransaction();
    const opts = { session };
    const newDetailProduct = await DetailProduct.create([req.body], opts);
    if (newDetailProduct) {
      req.body.detailProduct = newDetailProduct[0]._id;
      const newProduct = await Product.create([req.body], opts);
      if (newProduct) {
        await session.commitTransaction();
      } else {
        throw new Error("Failed to create newDetailProduct");
      }
    } else {
      throw new Error("Failed to create newProduct");
    }
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};
const getAllProduct = factory.getAll(Product);
const updateProduct = async (req) => {
  // const doc = await Product.findByIdAndUpdate(req.params.id, req.body, {
  //   new: true,
  //   runValidators: true,
  // }).lean();
  // if (!doc) {
  //   throw new AppError("No document found with that ID", 404);
  // }
  // return {
  //   data: doc,
  // };
  return;
};
const deleteOneProduct = factory.deleteOne(Product);

export const productService = {
  getProduct,
  getAllProduct,
  updateProduct,
  deleteOneProduct,
  createProduct,
};
