import TypeRam from "~/models/typeRam.model";
import { factory } from "./handlerFactory";

const getTypeRam = factory.getOne(TypeRam);
const createTypeRam = factory.createOne(TypeRam);
const getAllTypeRam = factory.getAll(TypeRam);
const updateTypeRam = factory.updateOne(TypeRam);
const deleteOneTypeRam = factory.deleteOne(TypeRam);

export const typeRam = {
  getTypeRam,
  getAllTypeRam,
  updateTypeRam,
  deleteOneTypeRam,
  createTypeRam,
};
