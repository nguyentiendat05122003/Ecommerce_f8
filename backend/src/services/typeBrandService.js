import TypeBrand from "~/models/typeOfBrand.model";
import { factory } from "./handlerFactory";

const getTypeBrand = factory.getOne(TypeBrand);
const createTypeBrand = factory.createOne(TypeBrand);
const getAllTypeBrand = factory.getAll(TypeBrand);
const updateTypeBrand = factory.updateOne(TypeBrand);
const deleteOneTypeBrand = factory.deleteOne(TypeBrand);

export const typeBrandService = {
  getTypeBrand,
  getAllTypeBrand,
  updateTypeBrand,
  deleteOneTypeBrand,
  createTypeBrand,
};
