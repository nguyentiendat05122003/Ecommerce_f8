import ScreenSize from "~/models/screenSize.model";
import { factory } from "./handlerFactory";

const getScreenSize = factory.getOne(ScreenSize)
const createScreenSize = factory.createOne(ScreenSize)
const getAllScreenSize = factory.getAll(ScreenSize)
const updateScreenSize = factory.updateOne(ScreenSize)
const deleteOneScreenSize = factory.deleteOne(ScreenSize)

export const screenSizeService = { getScreenSize, getAllScreenSize, updateScreenSize, deleteOneScreenSize, createScreenSize }