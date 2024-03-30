import SpecialFeatures from "~/models/specialFeatures.model";
import { factory } from "./handlerFactory";

const getSpecialFeatures = factory.getOne(SpecialFeatures)
const createSpecialFeatures = factory.createOne(SpecialFeatures)
const getAllSpecialFeatures = factory.getAll(SpecialFeatures)
const updateSpecialFeatures = factory.updateOne(SpecialFeatures)
const deleteOneSpecialFeatures = factory.deleteOne(SpecialFeatures)

export const specialFeaturesService = { getSpecialFeatures, getAllSpecialFeatures, updateSpecialFeatures, deleteOneSpecialFeatures, createSpecialFeatures }