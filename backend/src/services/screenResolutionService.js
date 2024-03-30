import ScreenResolution from "~/models/screenresolution.model";
import { factory } from "./handlerFactory";

const getScreenResolution = factory.getOne(ScreenResolution)
const createScreenResolution = factory.createOne(ScreenResolution)
const getAllScreenResolution = factory.getAll(ScreenResolution)
const updateScreenResolution = factory.updateOne(ScreenResolution)
const deleteOneScreenResolution = factory.deleteOne(ScreenResolution)

export const screenResolutionService = { getScreenResolution, getAllScreenResolution, updateScreenResolution, deleteOneScreenResolution, createScreenResolution }