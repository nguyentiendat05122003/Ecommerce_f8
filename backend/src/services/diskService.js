import Disk from "~/models/disk.model";
import { factory } from "./handlerFactory";

const getDisk = factory.getOne(Disk)
const createDisk = factory.createOne(Disk)
const getAllDisk = factory.getAll(Disk)
const updateDisk = factory.updateOne(Disk)
const deleteOneDisk = factory.deleteOne(Disk)

export const diskService = { getDisk, getAllDisk, updateDisk, deleteOneDisk, createDisk }