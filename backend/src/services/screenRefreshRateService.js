import ScreenRefreshRate from "~/models/screenRefreshRate.model";
import { factory } from "./handlerFactory";

const getScreenRefreshRate = factory.getOne(ScreenRefreshRate)
const createScreenRefreshRate = factory.createOne(ScreenRefreshRate)
const getAllScreenRefreshRate = factory.getAll(ScreenRefreshRate)
const updateScreenRefreshRate = factory.updateOne(ScreenRefreshRate)
const deleteOneScreenRefreshRate = factory.deleteOne(ScreenRefreshRate)

export const screenRefreshRateService = { getScreenRefreshRate, getAllScreenRefreshRate, updateScreenRefreshRate, deleteOneScreenRefreshRate, createScreenRefreshRate }