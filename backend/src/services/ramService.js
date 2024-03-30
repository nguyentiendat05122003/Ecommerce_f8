import Ram from "~/models/ram.model";
import { factory } from "./handlerFactory";

const getRam = factory.getOne(Ram)
const createRam = factory.createOne(Ram)
const getAllRam = factory.getAll(Ram)
const updateRam = factory.updateOne(Ram)
const deleteOneRam = factory.deleteOne(Ram)

export const ramService = { getRam, getAllRam, updateRam, deleteOneRam, createRam }