import TypeProduct from "~/models/typeProduct.model";
import { factory } from "./handlerFactory";

const getTypeProduct = factory.getOne(TypeProduct);
const createTypeProduct = factory.createOne(TypeProduct);
const getAllTypeProduct = factory.getAll(TypeProduct);
const updateTypeProduct = factory.updateOne(TypeProduct);
const deleteOneTypeProduct = factory.deleteOne(TypeProduct);

export const typeProductService = {
  getTypeProduct,
  getAllTypeProduct,
  updateTypeProduct,
  deleteOneTypeProduct,
  createTypeProduct,
};
