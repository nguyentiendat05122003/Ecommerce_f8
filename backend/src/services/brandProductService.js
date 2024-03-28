import BrandProduct from "~/models/brand.model";
import { factory } from "./handlerFactory";

const getBrandProduct = factory.getOne(BrandProduct)
const createBrandProduct = factory.createOne(BrandProduct)
const getAllBrandProduct = factory.getAll(BrandProduct)
const updateBrandProduct = factory.updateOne(BrandProduct)
const deleteOneBrandProduct = factory.deleteOne(BrandProduct)

export const brandProductService = { getBrandProduct, getAllBrandProduct, updateBrandProduct, deleteOneBrandProduct, createBrandProduct }