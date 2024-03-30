import OtherInfo from "~/models/otherInfo.model";
import { factory } from "./handlerFactory";

const getOtherInfo = factory.getOne(OtherInfo)
const createOtherInfo = factory.createOne(OtherInfo)
const getAllOtherInfo = factory.getAll(OtherInfo)
const updateOtherInfo = factory.updateOne(OtherInfo)
const deleteOneOtherInfo = factory.deleteOne(OtherInfo)

export const OtherInfoService = { getOtherInfo, getAllOtherInfo, updateOtherInfo, deleteOneOtherInfo, createOtherInfo }