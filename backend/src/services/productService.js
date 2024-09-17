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
  try {
    let thumbs = [];
    let detailImages = [];
    if (req.files && req.files.thumbs) {
      for (const file of req.files.thumbs) {
        const { path } = file;
        const newPath = await uploadThumbProduct({ path });
        thumbs.push(newPath);
      }
    } else {
      const existingProduct = await Product.findById(req.params.id);
      thumbs = existingProduct.thumbs;
    }
    if (req.files && req.files.detailImages) {
      for (const file of req.files.detailImages) {
        const { path } = file;
        const newPath = await uploadDetailImageProduct({ path });
        detailImages.push(newPath);
      }
    } else {
      const existingProduct = await Product.findById(req.params.id);
      detailImages = existingProduct.detailImages;
    }
    req.body.thumbs = thumbs;
    req.body.detailImages = detailImages;

    const {
      name,
      desc,
      price,
      brand,
      typeProduct,
      cpu,
      disk,
      ram,
      typeBrand,
      specialFeatures,
      screen,
      card,
      active,
      keyboard_backlight,
      size,
      material,
      battery,
      chargeCapacity,
      os,
      launchTime,
    } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name,
        desc,
        price,
        brand,
        typeProduct,
        cpu,
        disk,
        ram,
        typeBrand,
        specialFeatures,
        screen,
        card,
        active,
        thumbs,
        detailImages,
      },
      {
        new: true,
        runValidators: true,
      }
    ).lean();

    if (!updatedProduct) {
      throw new AppError("No document found with that ID", 404);
    }

    const detailProductUpdateData = {
      keyboard_backlight,
      size,
      material,
      battery,
      chargeCapacity,
      os,
      launchTime,
    };

    const updatedDetailProduct = await DetailProduct.findByIdAndUpdate(
      updatedProduct.detailProduct,
      detailProductUpdateData,
      {
        new: true,
        runValidators: true,
      }
    ).lean();

    if (!updatedDetailProduct) {
      throw new AppError("No detail product found with that ID", 404);
    }

    return {
      data: {
        ...updatedProduct,
        detailProduct: updatedDetailProduct,
      },
    };
  } catch (error) {
    console.error("Error updating product:", error);
  }
};
const deleteOneProduct = factory.deleteOne(Product);

export const productService = {
  getProduct,
  getAllProduct,
  updateProduct,
  deleteOneProduct,
  createProduct,
};
