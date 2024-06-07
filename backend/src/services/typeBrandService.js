import TypeBrand from "~/models/typeOfBrand.model";
import { factory } from "./handlerFactory";
import AppError from "~/utils/AppError";

const getTypeBrand = async (req) => {
  let query = TypeBrand.find({ brand: req.params.id });
  const doc = await query;
  if (!doc) {
    throw new AppError("No document found with that ID", 404);
  }
  return {
    data: doc,
  };
};
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
