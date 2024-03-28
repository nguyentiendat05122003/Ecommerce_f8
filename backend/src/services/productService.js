import Product from "~/models/product.model";
import { factory } from "./handlerFactory";

const getProduct = factory.getOne(Product)
const createProduct = factory.createOne(Product)
const getAllProduct = factory.getAll(Product)
const updateProduct = factory.updateOne(Product)
const deleteOneProduct = factory.deleteOne(Product)

export const productService = { getProduct, getAllProduct, updateProduct, deleteOneProduct, createProduct }