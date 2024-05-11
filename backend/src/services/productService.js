import Product from "~/models/product.model";
import { factory } from "./handlerFactory";
import { uploadDetailImageProduct, uploadThumbProduct } from "~/utils/Upload";
import mongoose from "mongoose";
import DetailProduct from "~/models/detailProduct.model";

const getProduct = factory.getOne(Product);
const createProduct = async (req) => {
  const thumbs = [];
  const detailImages = [];
  if (req.files.thumbs)
    for (const file of req.files.thumbs) {
      const { path } = file;
      const newPath = await uploadThumbProduct({ path });
      console.log(newPath);
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
    console.log(req.body);
    const newProduct = await Product.create([req.body], opts);
    if (newProduct) {
      console.log(newProduct);
      req.body.product = newProduct._id;
      const newDetailProduct = await DetailProduct.create([req.body], opts);
      console.log("detail product", newDetailProduct);
      if (newDetailProduct) {
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
const updateProduct = factory.updateOne(Product);
const deleteOneProduct = factory.deleteOne(Product);

export const productService = {
  getProduct,
  getAllProduct,
  updateProduct,
  deleteOneProduct,
  createProduct,
};
